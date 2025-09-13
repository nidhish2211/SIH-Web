from flask import Flask, request, jsonify
import pandas as pd
import joblib

app = Flask(__name__)

# Load artifacts
imputer = joblib.load("imputer.pkl")
scaler = joblib.load("scaler.pkl")
model = joblib.load("water_quality_xgb.pkl")
FEATURES = joblib.load("features.pkl")

# WHO limits for feature engineering
WHO_LIMITS = {
    "ph": 7.0,
    "Hardness": 300,
    "Solids": 500,
    "Chloramines": 4,
    "Sulfate": 250,
    "Conductivity": 400,
    "Organic_carbon": 10,
    "Trihalomethanes": 80,
    "Turbidity": 5
}

def calc_qi(observed, standard):
    return (observed / standard) * 100 if standard != 0 else 0

def engineer_features(df):
    df_new = df.copy()
    for col, limit in WHO_LIMITS.items():
        df_new[f"qi_{col}"] = df_new[col].apply(lambda x: calc_qi(x, limit) if pd.notnull(x) else None)
    df_new["pH_deviation"] = df_new["ph"].apply(lambda x: abs(x - 7.0))
    df_new["Turbidity_Solids"] = df_new["Turbidity"] * df_new["Solids"]
    df_new["Chloro_OrgC"] = df_new["Chloramines"] * df_new["Organic_carbon"]
    df_new["Cond_Sulf_Ratio"] = df_new["Conductivity"] / (df_new["Sulfate"] + 1)
    df_new["Turbidity_flag"] = (df_new["Turbidity"] > 5).astype(int)
    df_new["pH_flag"] = ((df_new["ph"] < 6.5) | (df_new["ph"] > 8.5)).astype(int)
    return df_new

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    df_sample = pd.DataFrame([data])
    df_sample = engineer_features(df_sample)
    X_sample = df_sample[FEATURES]
    X_sample = imputer.transform(X_sample)
    X_sample = scaler.transform(X_sample)
    prob = model.predict_proba(X_sample)[0, 1]
    pred = int(prob >= 0.4)
    return jsonify({
        "potability": pred,
        "probability": float(prob)
    })

if __name__ == '__main__':
    app.run(debug=True)