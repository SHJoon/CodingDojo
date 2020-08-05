from flask import Flask

app = Flask(__name__)    # Create a new instance of the Flask class called "app"

@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    return 'Hello World!'  # Return the string 'Hello World!' as a response

@app.route('/dojo')
def dojo():
  return "Dojo"

@app.route('/say/<name>')
def say(name):
    print(name)
    return "Hi " + name.capitalize() + "!"

@app.route('/repeat/<int:num>/<word>')
def repeat(num, word):
    myStr = ""
    for i in range(int(num)):
        myStr += word + " "
    return myStr

@app.route('/users/<username>/<id>') # for a route '/users/____/____', two parameters in the url get passed as username and id
def show_user_profile(username, id):
    print(username)
    print(id)
    return "username: " + username + ", id: " + id

@app.errorhandler(404)
def page_not_found(e):
    return "Sorry! No response. Try again.", 404

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.