# import datetime as dt
# import numpy as np
# import pandas as pd

# import sqlalchemy
# from sqlalchemy.ext.automap import automap_base
# from sqlalchemy.orm import Session
# from sqlalchemy import create_engine, func

from flask import Flask, jsonify,  render_template
from flaskext.mysql import MySQL

mysql = MySQL()
app = Flask(__name__)
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'root'
app.config['MYSQL_DATABASE_DB'] = 'nbadb'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
mysql.init_app(app)


#################################################
# Database Setup
#################################################
# engine = create_engine("sqlite:///hawaii.sqlite")

# reflect an existing database into a new model
# Base = automap_base()
# reflect the tables
# Base.prepare(engine, reflect=True)

# Save references to each table
# Measurement = Base.classes.measurement
# Station = Base.classes.station

# Create our session (link) from Python to the DB
# session = Session(engine)

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    return render_template('bar.html')

@app.route("/grabTeam/<team_name>")
def grabTeam(team_name):
    print(team_name)

    cursor = mysql.connect().cursor()
    cursor.execute("SELECT * FROM teams WHERE team_name = '" + team_name + "';")
    stuffFromDB = cursor.fetchone()
    print(stuffFromDB)
    return jsonify(stuffFromDB) 


if __name__ == '__main__':
    app.run()
