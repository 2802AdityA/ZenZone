# Setup a backend to get data from index.html
from flask import Flask, render_template, request
# import pickle
# import numpy as np
app = Flask(__name__, template_folder='Template')
# model=pickle.load(open("./ml/model.pkl","rb"))
@app.route("/", methods=["GET"])
def home():
    return render_template('index.html')
        
@app.route('/predict', methods=['POST','GET'])
def predict():
    int_features=[int(x) for x in request.form.values()]
    return render_template('index.html', pred=1)
    
if __name__ == '__main__':
    app.run(debug=True)