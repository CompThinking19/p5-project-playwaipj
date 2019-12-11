import flask

app = flask.Flask(__name__)
# app.config["DEBUG"] = True

@app.route('/', methods=['GET'])
def home():
    return flask.render_template('index.html')

@app.route('/results', methods=['GET', 'POST'])
def results():
    weight = int(flask.request.form.get('weight'))
    height = int(flask.request.form.get('height'))
    BMI = round(703 * weight / height**2, 2)
    return flask.render_template('results.html', BMI = BMI, weight = weight, height = height)
        
app.run(host="0.0.0.0")
# app.run()
