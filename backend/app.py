from flask import Flask, jsonify
from flask_cors import CORS
import json
from research_data import research_papers

app = Flask(__name__)
CORS(app)

@app.route("/api/projects")
def get_projects():
    with open("projects.json", "r") as f:
        data = json.load(f)
    return jsonify(data)

@app.route("/api/research", methods=["GET"])
def get_research():
    return jsonify(research_papers)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
