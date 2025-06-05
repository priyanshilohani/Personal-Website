from flask import Flask, jsonify, send_from_directory
import os
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

@app.route("/api/resume")
def download_resume():
    resume_path = os.path.join(os.getcwd(), "resumes")
    return send_from_directory(resume_path, "resume.pdf", as_attachment=True)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
