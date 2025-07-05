from flask import Flask, render_template , request ,redirect , session , url_for , jsonify , make_response 
import pyrebase
import firebase_admin
import os  
import json
from firebase_admin import credentials , firestore
from dotenv import load_dotenv
load_dotenv()
app = Flask(__name__)
config = {
  "apiKey": "AIzaSyAZ_eDWuwWm-vIYKRftPBgL6Lt8l643nrg",
  "authDomain": "decent-subset-434817-p6.firebaseapp.com",
  "projectId": "decent-subset-434817-p6",
  "storageBucket": "decent-subset-434817-p6.firebasestorage.app",
  "messagingSenderId": "101284109567",
  "appId": "1:101284109567:web:b4dea61c8bba74d78900ca",
  "measurementId": "G-Y3XN5QS81T",
  "databaseURL" : ""
}

# Auth
firebase = pyrebase.initialize_app(config)
auth = firebase.auth()
app.secret_key = "zlsk_zkzs_slsl"

# Firestore
firebasedata = json.loads(os.getenv("SERVICE_ACCOUNT"))
cred = credentials.Certificate(firebasedata)
firebase_admin = firebase_admin.initialize_app(cred)
db = firestore.client()
@app.route('/')
def totorial():
   return render_template('totorial.html')
 
@app.route('/signup' , methods= ['POST' , 'GET'])
def signup():
  email = request.form.get('email')
  password = request.form.get('password')
  if request.method == 'POST':
    try:
      user = auth.create_user_with_email_and_password(email , password)
      user_id = user['localId']  # المستخدم ID حفظ  
      db.collection("users").document(user_id).set({
        "email" : email,
        "user_id" : user_id
      })
      session['localId'] = user_id  # localId = مستحدم ID 
      
      return redirect(url_for('home'))
    except:
     return render_template('signup.html')
  return render_template('signup.html')  



@app.route('/login' , methods=['POST' , 'GET'])
def login():
  if request.method == 'POST':
    email = request.form.get('email')
    password = request.form.get('password')    
    try:
       user = auth.sign_in_with_email_and_password(email , password)
       user_id = user['localId']
       user_ref = db.collection("users").document(user_id).get()
       if user_ref.exists:
        session['localId'] = user_id
        return redirect(url_for('home'))
    except:
      return redirect(url_for('login'))  
  return render_template('login.html')









@app.route('/setproject' , methods= ['POST' , 'GET'])
def setproject():
  user_id = session.get('localId')
  if request.method == 'POST':
    try:
      project_rif = db.collection("users").document(user_id).collection("projects").document()
      # if request.is_json:
      #   data = request.get_json()
      
      project_id = project_rif.id
      
      projectData = {
       "project_id" : project_id, 
       "projectname" :  request.form.get('projectname'),
       "descrpction" : request.form.get('descrpction'),
       "projectteam" : request.form.get('projectteam'),
       "Startdate" :  request.form.get('Startdate'),
       "Delevrydate" : request.form.get('Delevrydate'),
       "Budget" :  request.form.get('Budget'),
      #  "state" : data
      }
      
      project_rif.set(projectData)
      return redirect(url_for('doneadd'))
    except:
      return 'ERROR'
  



@app.route('/home' , methods = ['GET'])
def home():
  user_id = session.get('localId')

  getingprojects = db.collection("users").document(user_id).collection("projects").stream()
  listpros = []
  for listpro in getingprojects:
      listpros.append(listpro.to_dict())
      print(listpros)  
  return render_template('home.html' , arrypro=listpros )      




@app.route('/dachbored')
def dachbored():
    user_id = session.get('localId')
    if not user_id:
        return "User not logged in", 403

    # الحصول على جميع المشاريع الخاصة بالمستخدم
    projects_ref = db.collection("users").document(user_id).collection("projects").stream()
    listpros = [{"project_id": proj.id, **proj.to_dict()} for proj in projects_ref]

    # الحصول على project_id من الرابط (اختياري)
    project_id = request.args.get("project_id")

    tasks = []  # قائمة فارغة في حالة عدم تحديد مشروع
    if project_id:
        try:
            tasks_ref = db.collection("users").document(user_id).collection("projects").document(project_id).collection("tasks").stream()
            tasks = [task.to_dict() for task in tasks_ref]
        except Exception as e:
            return f"Error fetching tasks: {str(e)}", 500

    return render_template('dachbored.html', tasks=tasks, listpros=listpros, project_id=project_id)
  





@app.route('/tasks/<project_id>', methods=['POST'])
def tasks(project_id):
    user_id = session.get('localId')
    if not user_id:
        return "User not logged in", 403
    
    try:
        
        tasks_ref = db.collection("users").document(user_id).collection("projects").document(project_id).collection("tasks")
        task_id = tasks_ref.id
        tasks_ref.add({
          "task_id" : task_id,
          "nametask": request.form.get("addtask"),
          
        })    
        
        return redirect(url_for('dachbored', project_id=project_id))
    except Exception as e:
        return f"Error: {str(e)}"




@app.route('/tasks/<project_id>', methods=['GET'])
def gettasks(project_id):
    user_id = session.get('localId')

    if not user_id:
        return "User not logged in", 403
    
    try:
        # جلب المشاريع
        projects_ref = db.collection("users").document(user_id).collection("projects").stream()
        listpros = [{"project_id": proj.id, **proj.to_dict()} for proj in projects_ref]  # تأكد أن كل مشروع يحتوي على project_id

        # جلب المهام
        tasks_ref = db.collection("users").document(user_id).collection("projects").document(project_id).collection("tasks").stream()
        tasks = [task.to_dict() for task in tasks_ref]

        return render_template('dachbored.html', tasks=tasks, project_id=project_id, listpros=listpros)
    except Exception as e:
        return f"Error: {str(e)}"
      
      
      
      
@app.route('/doneadd')
def doneadd():
  return render_template('doneadd.html')



@app.route('/blog')
def blog():
  return render_template('blog.html')
    
    
    
if __name__ == "main":
  app.run(debug=True)