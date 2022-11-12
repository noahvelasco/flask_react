# How To Run this app

### Dependencies

```
sudo apt-get install python3
sudo npm install react-bootstrap bootstrap
sudo npm install react-router-dom
sudo apt-get install expect
pip install -U flask-cors
pip install Flask
pip install flask python-dotenv
pip install Flask-PyMongo
npm install react-scripts
```

1. Fork/Clone this Repo
2. Run below - 
```
cd api
```
3. Run below -
```
python3 -m venv venv
```

4. Open up 2 terminals, A and B
5. In termial A run -
```
cd ~/Desktop/flask_react/api
. venv/bin/activate
flask run
```
6. In terminal B run - 
```
cd ~/Desktop/flask_test
npm start
```

### Other possible issue

* "React Proxy error: Could not proxy request /api/ from localhost:3000 to..."
1. Delete the package-lock.json
2. Run - 
```
npm install
```







