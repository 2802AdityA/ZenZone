# Setup a backend to get data from index.html
from flask import Flask, render_template, request, jsonify
import pickle
import numpy as np
from model import scale_age
app = Flask(__name__, template_folder='../public', static_folder="../build", static_url_path="/")
model=pickle.load(open("./ml/model.pkl","rb"))

        
@app.route('/predict', methods=['POST','GET'])
def predict():
    formData = request.form
    # for x in formData.values():
    #     print(x)
    # for x in request.form.values():
    #     print(x)
    int_features=[int(x) for x in formData.values()]
    int_features[0]=scale_age(int_features[0])[0]
    
    print(int_features)
    # list = [0.159091,1,0,0,1,0,0,0]
    # list=[0.340909,1,1,2,1,0,0,4]
    final = [np.array(int_features)]
    prediction = model.predict(final)
    # print(int(prediction[0]))
    # data = {'message': int_features}
    # return jsonify(data)
    return jsonify({"output":int(prediction[0])})
    
if __name__ == '__main__':
    app.run(debug=True)