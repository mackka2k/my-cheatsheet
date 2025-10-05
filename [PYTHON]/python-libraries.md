# Every Python Library / Module Explained

## 🎮 Pygame

**Definition:** Game development library for creating 2D games and multimedia applications.

```python
import pygame

# Initialize Pygame
pygame.init()

# Create game window
screen = pygame.display.set_mode((800, 600))
pygame.display.set_caption("My Game")

# Game loop
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
    
    # Game logic here
    screen.fill((0, 0, 0))  # Black background
    pygame.display.flip()

pygame.quit()
```

**Key Features:**
- 2D graphics and sprites
- Sound and music support
- Event handling
- Collision detection
- Animation support

---

## 🧠 TensorFlow

**Definition:** Open-source machine learning platform for building and deploying ML models.

```python
import tensorflow as tf

# Create a simple neural network
model = tf.keras.Sequential([
    tf.keras.layers.Dense(128, activation='relu', input_shape=(784,)),
    tf.keras.layers.Dense(10, activation='softmax')
])

# Compile the model
model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])

# Train the model
model.fit(x_train, y_train, epochs=5)

# Make predictions
predictions = model.predict(x_test)
```

**Key Features:**
- Deep learning framework
- GPU acceleration
- Keras high-level API
- TensorBoard visualization
- Production deployment

---

## ⚡ PyTorch

**Definition:** Dynamic neural network framework with automatic differentiation.

```python
import torch
import torch.nn as nn

# Define neural network
class Net(nn.Module):
    def __init__(self):
        super(Net, self).__init__()
        self.fc1 = nn.Linear(784, 128)
        self.fc2 = nn.Linear(128, 10)
    
    def forward(self, x):
        x = torch.relu(self.fc1(x))
        x = self.fc2(x)
        return x

# Create model and optimizer
model = Net()
optimizer = torch.optim.Adam(model.parameters())
criterion = nn.CrossEntropyLoss()

# Training loop
for epoch in range(5):
    for data, target in train_loader:
        optimizer.zero_grad()
        output = model(data)
        loss = criterion(output, target)
        loss.backward()
        optimizer.step()
```

**Key Features:**
- Dynamic computation graphs
- Pythonic interface
- Strong research community
- TorchScript for deployment
- Mobile support

---

## 🖥️ Tkinter

**Definition:** Python's standard GUI toolkit for creating desktop applications.

```python
import tkinter as tk
from tkinter import ttk, messagebox

# Create main window
root = tk.Tk()
root.title("My App")
root.geometry("400x300")

# Create widgets
label = ttk.Label(root, text="Hello World!")
label.pack(pady=10)

button = ttk.Button(root, text="Click Me", 
                   command=lambda: messagebox.showinfo("Info", "Button clicked!"))
button.pack(pady=5)

entry = ttk.Entry(root, width=30)
entry.pack(pady=5)

# Start the application
root.mainloop()
```

**Key Features:**
- Cross-platform GUI
- Built into Python
- Simple and lightweight
- Rich widget set
- Event-driven programming

---

## 👁️ OpenCV

**Definition:** Computer vision library for image and video processing.

```python
import cv2
import numpy as np

# Load image
img = cv2.imread('image.jpg')

# Convert to grayscale
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# Edge detection
edges = cv2.Canny(gray, 50, 150)

# Face detection
face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
faces = face_cascade.detectMultiScale(gray, 1.1, 4)

# Draw rectangles around faces
for (x, y, w, h) in faces:
    cv2.rectangle(img, (x, y), (x+w, y+h), (255, 0, 0), 2)

# Display image
cv2.imshow('Image', img)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

**Key Features:**
- Image and video processing
- Object detection
- Machine learning algorithms
- Camera calibration
- 3D reconstruction

---

## 🔢 NumPy

**Definition:** Fundamental package for scientific computing with Python.

```python
import numpy as np

# Create arrays
arr1d = np.array([1, 2, 3, 4, 5])
arr2d = np.array([[1, 2, 3], [4, 5, 6]])

# Array operations
result = arr1d * 2  # Element-wise multiplication
sum_result = np.sum(arr2d)  # Sum all elements
mean_result = np.mean(arr2d)  # Mean of all elements

# Mathematical functions
sin_values = np.sin(np.linspace(0, 2*np.pi, 100))
random_array = np.random.randn(3, 4)  # Random normal distribution

# Array manipulation
reshaped = arr2d.reshape(6, 1)  # Reshape array
transposed = arr2d.T  # Transpose

# Broadcasting
a = np.array([[1, 2, 3], [4, 5, 6]])
b = np.array([10, 20, 30])
result = a + b  # Broadcasting
```

**Key Features:**
- N-dimensional arrays
- Mathematical functions
- Linear algebra operations
- Broadcasting
- Integration with C/C++

---

## 📱 Kivy

**Definition:** Cross-platform GUI framework for creating mobile and desktop apps.

```python
from kivy.app import App
from kivy.uix.button import Button
from kivy.uix.label import Label
from kivy.uix.boxlayout import BoxLayout

class MyApp(App):
    def build(self):
        layout = BoxLayout(orientation='vertical')
        
        label = Label(text='Hello Kivy!')
        button = Button(text='Click Me')
        
        layout.add_widget(label)
        layout.add_widget(button)
        
        return layout

if __name__ == '__main__':
    MyApp().run()
```

**Key Features:**
- Cross-platform (Windows, Mac, Linux, Android, iOS)
- Touch-friendly interface
- OpenGL ES 2.0 graphics
- Multi-touch support
- Custom widgets

---

## 🕷️ Beautiful Soup

**Definition:** Library for pulling data out of HTML and XML files.

```python
from bs4 import BeautifulSoup
import requests

# Get webpage content
response = requests.get('https://example.com')
soup = BeautifulSoup(response.content, 'html.parser')

# Find elements
title = soup.find('title').text
links = soup.find_all('a')
paragraphs = soup.find_all('p')

# Extract data
for link in links:
    print(link.get('href'))
    print(link.text)

# CSS selectors
divs = soup.select('div.class-name')
ids = soup.select('#element-id')
```

**Key Features:**
- HTML/XML parsing
- CSS selector support
- Navigate parse trees
- Extract data easily
- Handle malformed markup

---

## 🤖 Mechanical Soup

**Definition:** Library for automating interaction with websites.

```python
import mechanicalsoup

# Create browser object
browser = mechanicalsoup.Browser()

# Navigate to page
page = browser.get('https://example.com')

# Fill form
form = page.soup.select('form')[0]
form.select('input[name="username"]')[0]['value'] = 'myusername'
form.select('input[name="password"]')[0]['value'] = 'mypassword'

# Submit form
response = browser.submit(form, page.url)

# Get results
print(response.text)
```

**Key Features:**
- Form filling and submission
- Session management
- Cookie handling
- Built on Beautiful Soup
- Simple API

---

## 🌐 Selenium

**Definition:** Web browser automation tool for testing and web scraping.

```python
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

# Create driver
driver = webdriver.Chrome()

# Navigate to page
driver.get('https://example.com')

# Find elements
search_box = driver.find_element(By.NAME, 'q')
search_box.send_keys('Python programming')
search_box.send_keys(Keys.RETURN)

# Wait for results
driver.implicitly_wait(10)

# Get page source
page_source = driver.page_source

# Close browser
driver.quit()
```

**Key Features:**
- Browser automation
- JavaScript execution
- Cross-browser testing
- Web scraping
- Form interaction

---

## 🕸️ Scrapy

**Definition:** Web scraping framework for extracting data from websites.

```python
import scrapy

class QuotesSpider(scrapy.Spider):
    name = 'quotes'
    start_urls = ['http://quotes.toscrape.com/']

    def parse(self, response):
        for quote in response.css('div.quote'):
            yield {
                'text': quote.css('span.text::text').get(),
                'author': quote.css('small.author::text').get(),
                'tags': quote.css('div.tags a.tag::text').getall(),
            }

        # Follow pagination links
        next_page = response.css('li.next a::attr(href)').get()
        if next_page is not None:
            yield response.follow(next_page, self.parse)
```

**Key Features:**
- Asynchronous scraping
- Built-in data export
- Middleware support
- Request/response filtering
- Distributed crawling

---

## 🗄️ SQLite

**Definition:** Lightweight, serverless SQL database engine.

```python
import sqlite3

# Connect to database
conn = sqlite3.connect('example.db')
cursor = conn.cursor()

# Create table
cursor.execute('''CREATE TABLE users
                  (id INTEGER PRIMARY KEY, name TEXT, email TEXT)''')

# Insert data
cursor.execute("INSERT INTO users (name, email) VALUES (?, ?)", 
               ('John Doe', 'john@example.com'))

# Query data
cursor.execute("SELECT * FROM users")
rows = cursor.fetchall()

for row in rows:
    print(row)

# Commit and close
conn.commit()
conn.close()
```

**Key Features:**
- Serverless database
- Zero configuration
- Cross-platform
- ACID compliant
- Built into Python

---

## 🖼️ Pillow (PIL)

**Definition:** Python Imaging Library for image processing and manipulation.

```python
from PIL import Image, ImageFilter, ImageDraw

# Open image
img = Image.open('image.jpg')

# Basic operations
img_resized = img.resize((800, 600))
img_rotated = img.rotate(90)
img_flipped = img.transpose(Image.FLIP_LEFT_RIGHT)

# Apply filters
blurred = img.filter(ImageFilter.BLUR)
sharpened = img.filter(ImageFilter.SHARPEN)

# Draw on image
draw = ImageDraw.Draw(img)
draw.rectangle([(100, 100), (200, 200)], outline='red', width=2)

# Save image
img.save('modified_image.jpg')

# Convert formats
img_png = img.convert('PNG')
img_png.save('image.png')
```

**Key Features:**
- Image format support
- Image manipulation
- Filters and effects
- Drawing capabilities
- Color space conversion

---

## 📊 Matplotlib

**Definition:** Comprehensive plotting library for creating static, animated, and interactive visualizations.

```python
import matplotlib.pyplot as plt
import numpy as np

# Create data
x = np.linspace(0, 10, 100)
y = np.sin(x)

# Create plot
plt.figure(figsize=(10, 6))
plt.plot(x, y, label='sin(x)', linewidth=2)
plt.xlabel('X values')
plt.ylabel('Y values')
plt.title('Sine Wave')
plt.legend()
plt.grid(True)
plt.show()

# Multiple plots
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 5))
ax1.plot(x, y, 'b-')
ax2.plot(x, np.cos(x), 'r--')
plt.show()
```

**Key Features:**
- 2D and 3D plotting
- Publication-quality figures
- Customizable styles
- Animation support
- Interactive backends

---

## 🧮 SymPy

**Definition:** Python library for symbolic mathematics.

```python
import sympy as sp

# Define symbols
x, y = sp.symbols('x y')

# Create expressions
expr = x**2 + 2*x + 1
derivative = sp.diff(expr, x)  # 2*x + 2
integral = sp.integrate(expr, x)  # x**3/3 + x**2 + x

# Solve equations
equation = sp.Eq(x**2 - 4, 0)
solutions = sp.solve(equation, x)  # [-2, 2]

# Simplify expressions
complex_expr = (x**2 - 1) / (x - 1)
simplified = sp.simplify(complex_expr)  # x + 1

# Matrix operations
A = sp.Matrix([[1, 2], [3, 4]])
B = sp.Matrix([[5, 6], [7, 8]])
result = A * B
```

**Key Features:**
- Symbolic computation
- Calculus operations
- Equation solving
- Matrix algebra
- LaTeX output

---

## 🔬 SciPy

**Definition:** Library for scientific and technical computing.

```python
from scipy import optimize, integrate, interpolate
import numpy as np

# Optimization
def f(x):
    return (x - 2)**2 + 1

result = optimize.minimize(f, x0=0)
print(f"Minimum at x = {result.x[0]}")

# Integration
def integrand(x):
    return x**2

integral_result, error = integrate.quad(integrand, 0, 1)
print(f"Integral: {integral_result}")

# Interpolation
x = np.array([0, 1, 2, 3, 4])
y = np.array([0, 1, 4, 9, 16])
f_interp = interpolate.interp1d(x, y, kind='cubic')
new_x = np.linspace(0, 4, 100)
new_y = f_interp(new_x)
```

**Key Features:**
- Optimization algorithms
- Integration routines
- Interpolation functions
- Linear algebra
- Statistical functions

---

## 🤖 Scikit-learn

**Definition:** Machine learning library with simple and efficient tools.

```python
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
import numpy as np

# Generate sample data
X = np.random.randn(100, 1)
y = 2 * X.flatten() + 1 + np.random.randn(100) * 0.1

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Train model
model = LinearRegression()
model.fit(X_train, y_train)

# Make predictions
predictions = model.predict(X_test)

# Evaluate model
mse = mean_squared_error(y_test, predictions)
print(f"Mean Squared Error: {mse}")
```

**Key Features:**
- Supervised learning algorithms
- Unsupervised learning algorithms
- Model selection tools
- Data preprocessing
- Model evaluation

---

## 🧠 PyBrain

**Definition:** Modular machine learning library for Python.

```python
from pybrain.tools.shortcuts import buildNetwork
from pybrain.datasets import SupervisedDataSet
from pybrain.supervised.trainers import BackpropTrainer

# Create network
net = buildNetwork(2, 3, 1)

# Create dataset
ds = SupervisedDataSet(2, 1)
ds.addSample((0, 0), (0,))
ds.addSample((0, 1), (1,))
ds.addSample((1, 0), (1,))
ds.addSample((1, 1), (0,))

# Train network
trainer = BackpropTrainer(net, ds)
trainer.trainUntilConvergence()

# Test network
result = net.activate([0, 1])
print(f"Result: {result}")
```

**Key Features:**
- Neural networks
- Reinforcement learning
- Unsupervised learning
- Modular architecture
- Easy to use

---

## ⚡ Theano

**Definition:** Library for defining, optimizing, and evaluating mathematical expressions.

```python
import theano
import theano.tensor as T

# Define variables
x = T.dscalar('x')
y = T.dscalar('y')

# Define function
z = x + y
f = theano.function([x, y], z)

# Use function
result = f(2, 3)
print(f"Result: {result}")

# More complex example
a = T.dmatrix('a')
b = T.dmatrix('b')
c = T.dot(a, b)
matrix_mult = theano.function([a, b], c)

# Test matrix multiplication
A = [[1, 2], [3, 4]]
B = [[5, 6], [7, 8]]
result = matrix_mult(A, B)
print(f"Matrix result: {result}")
```

**Key Features:**
- Symbolic computation
- GPU acceleration
- Automatic differentiation
- Optimization
- Integration with NumPy

---

## 📝 Natural Language Toolkit (NLTK)

**Definition:** Platform for building Python programs to work with human language data.

```python
import nltk
from nltk.tokenize import word_tokenize, sent_tokenize
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer

# Download required data
nltk.download('punkt')
nltk.download('stopwords')

# Text processing
text = "Natural language processing is a fascinating field of study."

# Tokenization
words = word_tokenize(text)
sentences = sent_tokenize(text)

# Remove stopwords
stop_words = set(stopwords.words('english'))
filtered_words = [word for word in words if word.lower() not in stop_words]

# Stemming
stemmer = PorterStemmer()
stemmed_words = [stemmer.stem(word) for word in filtered_words]

print(f"Original: {words}")
print(f"Filtered: {filtered_words}")
print(f"Stemmed: {stemmed_words}")
```

**Key Features:**
- Text processing
- Tokenization
- Part-of-speech tagging
- Named entity recognition
- Sentiment analysis

---

## 🥒 Pickle

**Definition:** Module for serializing and deserializing Python objects.

```python
import pickle

# Data to serialize
data = {
    'name': 'John',
    'age': 30,
    'hobbies': ['reading', 'coding', 'gaming']
}

# Serialize to file
with open('data.pkl', 'wb') as f:
    pickle.dump(data, f)

# Deserialize from file
with open('data.pkl', 'rb') as f:
    loaded_data = pickle.load(f)

print(f"Loaded data: {loaded_data}")

# Serialize to string
data_string = pickle.dumps(data)
loaded_from_string = pickle.loads(data_string)

# Custom class serialization
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

person = Person('Alice', 25)
with open('person.pkl', 'wb') as f:
    pickle.dump(person, f)

with open('person.pkl', 'rb') as f:
    loaded_person = pickle.load(f)
```

**Key Features:**
- Object serialization
- Binary format
- Cross-platform
- Handles complex objects
- Fast and efficient

---

## 🎮 Pyglet

**Definition:** Cross-platform windowing and multimedia library for Python.

```python
import pyglet

# Create window
window = pyglet.window.Window(800, 600, "My Game")

# Load image
image = pyglet.image.load('sprite.png')
sprite = pyglet.sprite.Sprite(image)

# Load sound
sound = pyglet.media.load('sound.wav')

@window.event
def on_draw():
    window.clear()
    sprite.draw()

@window.event
def on_key_press(symbol, modifiers):
    if symbol == pyglet.window.key.SPACE:
        sound.play()

# Start the game
pyglet.app.run()
```

**Key Features:**
- OpenGL graphics
- Audio playback
- Input handling
- Cross-platform
- No external dependencies

---

## 🐍 Visual Python

**Definition:** 3D graphics library for creating 3D animations and visualizations.

```python
import vpython as vp

# Create scene
scene = vp.canvas(title="3D Scene")

# Create objects
ball = vp.sphere(pos=vp.vector(0, 0, 0), radius=1, color=vp.color.red)
box = vp.box(pos=vp.vector(5, 0, 0), size=vp.vector(2, 2, 2), color=vp.color.blue)

# Animation loop
while True:
    vp.rate(60)  # 60 FPS
    ball.pos.x += 0.1
    if ball.pos.x > 10:
        ball.pos.x = -10
```

**Key Features:**
- 3D graphics
- Real-time animation
- Physics simulation
- Easy to learn
- Educational focus

---

## 🐢 Turtle

**Definition:** Graphics library for creating drawings and patterns using turtle graphics.

```python
import turtle

# Create turtle
t = turtle.Turtle()
screen = turtle.Screen()

# Set up screen
screen.bgcolor("black")
t.color("white")
t.speed(0)

# Draw a square
for i in range(4):
    t.forward(100)
    t.right(90)

# Draw a circle
t.circle(50)

# Draw a spiral
for i in range(100):
    t.forward(i)
    t.right(90)

# Keep window open
turtle.done()
```

**Key Features:**
- Simple graphics
- Educational tool
- Pattern creation
- Easy to understand
- Built into Python

---

## 📊 RPy

**Definition:** Interface between Python and R statistical computing language.

```python
import rpy2.robjects as robjects
from rpy2.robjects import pandas2ri

# Enable pandas conversion
pandas2ri.activate()

# Create R objects
r_vector = robjects.FloatVector([1, 2, 3, 4, 5])
r_mean = robjects.r['mean']
result = r_mean(r_vector)

# Use R functions
r_plot = robjects.r['plot']
r_plot(r_vector)

# Convert between Python and R
import pandas as pd
df = pd.DataFrame({'x': [1, 2, 3], 'y': [4, 5, 6]})
r_df = pandas2ri.py2rpy(df)
```

**Key Features:**
- R integration
- Statistical functions
- Data conversion
- Plotting capabilities
- Statistical analysis

---

## 🗣️ SpaCy

**Definition:** Industrial-strength natural language processing library.

```python
import spacy

# Load model
nlp = spacy.load("en_core_web_sm")

# Process text
text = "Apple Inc. is an American multinational technology company."
doc = nlp(text)

# Extract entities
for ent in doc.ents:
    print(f"{ent.text}: {ent.label_}")

# Part-of-speech tagging
for token in doc:
    print(f"{token.text}: {token.pos_}")

# Dependency parsing
for token in doc:
    print(f"{token.text} -> {token.dep_} -> {token.head.text}")

# Similarity
doc1 = nlp("I like cats")
doc2 = nlp("I love felines")
similarity = doc1.similarity(doc2)
print(f"Similarity: {similarity}")
```

**Key Features:**
- Named entity recognition
- Part-of-speech tagging
- Dependency parsing
- Word vectors
- High performance

---

## 📈 Bokeh

**Definition:** Interactive visualization library for web applications.

```python
from bokeh.plotting import figure, show
from bokeh.io import output_notebook
import numpy as np

# Create data
x = np.linspace(0, 10, 100)
y = np.sin(x)

# Create plot
p = figure(title="Interactive Plot", x_axis_label='X', y_axis_label='Y')
p.line(x, y, legend_label="sin(x)", line_width=2)

# Add interactivity
p.circle(x[::10], y[::10], size=8, color="red", alpha=0.5)

# Show plot
show(p)
```

**Key Features:**
- Interactive plots
- Web-based visualization
- Real-time data
- Custom styling
- Server applications

---

## 📊 Plotly

**Definition:** Interactive graphing library for creating web-based visualizations.

```python
import plotly.express as px
import plotly.graph_objects as go
import pandas as pd

# Create sample data
df = pd.DataFrame({
    'x': [1, 2, 3, 4, 5],
    'y': [2, 4, 1, 5, 3],
    'category': ['A', 'B', 'A', 'C', 'B']
})

# Create interactive plot
fig = px.scatter(df, x='x', y='y', color='category', 
                 title='Interactive Scatter Plot')
fig.show()

# 3D plot
fig_3d = go.Figure(data=[go.Scatter3d(
    x=df['x'],
    y=df['y'],
    z=[1, 2, 3, 4, 5],
    mode='markers',
    marker=dict(size=8, color=df['y'], colorscale='Viridis')
)])
fig_3d.show()
```

**Key Features:**
- Interactive visualizations
- 3D plotting
- Web-based
- Real-time updates
- Export capabilities

---

## 🗃️ SQLAlchemy

**Definition:** SQL toolkit and Object-Relational Mapping (ORM) library.

```python
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Create engine
engine = create_engine('sqlite:///example.db')
Base = declarative_base()

# Define model
class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    name = Column(String(50))
    email = Column(String(100))

# Create tables
Base.metadata.create_all(engine)

# Create session
Session = sessionmaker(bind=engine)
session = Session()

# Add user
user = User(name='John Doe', email='john@example.com')
session.add(user)
session.commit()

# Query users
users = session.query(User).all()
for user in users:
    print(f"{user.name}: {user.email}")
```

**Key Features:**
- ORM capabilities
- Database abstraction
- Query building
- Connection pooling
- Migration support

---

## ⚡ FastAPI

**Definition:** Modern, fast web framework for building APIs with Python.

```python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List

app = FastAPI()

# Define data model
class Item(BaseModel):
    name: str
    price: float
    is_offer: bool = False

# In-memory storage
items = []

@app.get("/")
async def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
async def read_item(item_id: int):
    if item_id >= len(items):
        raise HTTPException(status_code=404, detail="Item not found")
    return items[item_id]

@app.post("/items/")
async def create_item(item: Item):
    items.append(item)
    return item

@app.get("/items/", response_model=List[Item])
async def read_items():
    return items
```

**Key Features:**
- High performance
- Automatic API documentation
- Type hints
- Async support
- Easy to use

---

## 🌐 Django

**Definition:** High-level Python web framework for rapid development.

```python
# models.py
from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

# views.py
from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from .models import Post

def post_list(request):
    posts = Post.objects.all()
    return render(request, 'blog/post_list.html', {'posts': posts})

def post_detail(request, pk):
    post = get_object_or_404(Post, pk=pk)
    return render(request, 'blog/post_detail.html', {'post': post})

# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.post_list, name='post_list'),
    path('post/<int:pk>/', views.post_detail, name='post_detail'),
]
```

**Key Features:**
- Full-stack framework
- Admin interface
- ORM
- Security features
- Scalable architecture

---

## 🚀 Flask

**Definition:** Lightweight web framework for building web applications.

```python
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/users', methods=['GET', 'POST'])
def users():
    if request.method == 'POST':
        data = request.json
        # Process user data
        return jsonify({'message': 'User created'}), 201
    else:
        # Return users
        return jsonify([{'id': 1, 'name': 'John'}])

@app.route('/user/<int:user_id>')
def user_detail(user_id):
    return f"User ID: {user_id}"

if __name__ == '__main__':
    app.run(debug=True)
```

**Key Features:**
- Micro framework
- Flexible
- Easy to learn
- Extensible
- Lightweight

---

## 🪟 PyWin32

**Definition:** Python extensions for Microsoft Windows.

```python
import win32api
import win32con
import win32gui
import win32clipboard

# Get system information
computer_name = win32api.GetComputerName()
user_name = win32api.GetUserName()

# Clipboard operations
win32clipboard.OpenClipboard()
win32clipboard.SetClipboardText("Hello from Python!")
text = win32clipboard.GetClipboardData()
win32clipboard.CloseClipboard()

# Window operations
def enum_windows_callback(hwnd, windows):
    if win32gui.IsWindowVisible(hwnd):
        windows.append((hwnd, win32gui.GetWindowText(hwnd)))

windows = []
win32gui.EnumWindows(enum_windows_callback, windows)

for hwnd, title in windows:
    if title:
        print(f"Window: {title}")
```

**Key Features:**
- Windows API access
- COM objects
- Registry operations
- Service management
- Windows-specific features

---

## 📦 Py2exe

**Definition:** Tool for converting Python scripts into Windows executables.

```python
# setup.py
from distutils.core import setup
import py2exe

setup(
    console=['my_script.py'],
    options={
        'py2exe': {
            'bundle_files': 1,
            'compressed': True,
        }
    }
)

# Command to build:
# python setup.py py2exe
```

**Key Features:**
- Create Windows executables
- Bundle dependencies
- Standalone applications
- Easy distribution
- No Python installation required

---

## 🖥️ PyQt

**Definition:** Python bindings for Qt application framework.

```python
import sys
from PyQt5.QtWidgets import QApplication, QWidget, QLabel, QPushButton, QVBoxLayout
from PyQt5.QtCore import Qt

class MyApp(QWidget):
    def __init__(self):
        super().__init__()
        self.initUI()
    
    def initUI(self):
        self.setWindowTitle('PyQt5 App')
        self.setGeometry(100, 100, 300, 200)
        
        # Create widgets
        self.label = QLabel('Hello PyQt5!', self)
        self.label.setAlignment(Qt.AlignCenter)
        
        self.button = QPushButton('Click Me', self)
        self.button.clicked.connect(self.on_click)
        
        # Layout
        layout = QVBoxLayout()
        layout.addWidget(self.label)
        layout.addWidget(self.button)
        self.setLayout(layout)
    
    def on_click(self):
        self.label.setText('Button clicked!')

if __name__ == '__main__':
    app = QApplication(sys.argv)
    window = MyApp()
    window.show()
    sys.exit(app.exec_())
```

**Key Features:**
- Cross-platform GUI
- Rich widget set
- Professional applications
- Custom styling
- Event handling

---

## 📚 Quick Reference

### **Library Categories**
- **Game Development**: Pygame, Kivy, Pyglet
- **Machine Learning**: TensorFlow, PyTorch, Scikit-learn, PyBrain, Theano
- **GUI Development**: Tkinter, Kivy, PyQt, Visual Python, Turtle
- **Web Development**: Django, Flask, FastAPI
- **Data Science**: NumPy, SciPy, Matplotlib, Bokeh, Plotly
- **Web Scraping**: Beautiful Soup, Mechanical Soup, Selenium, Scrapy
- **Computer Vision**: OpenCV, Pillow
- **Natural Language Processing**: NLTK, SpaCy
- **Database**: SQLite, SQLAlchemy
- **System**: PyWin32, Py2exe
- **Utilities**: Pickle, RPy

### **Common Use Cases**
- **Web APIs**: FastAPI, Flask, Django
- **Data Visualization**: Matplotlib, Plotly, Bokeh
- **Machine Learning**: TensorFlow, PyTorch, Scikit-learn
- **Desktop Apps**: Tkinter, PyQt, Kivy
- **Games**: Pygame, Kivy, Pyglet
- **Web Scraping**: Beautiful Soup, Selenium, Scrapy
- **Image Processing**: OpenCV, Pillow
- **Scientific Computing**: NumPy, SciPy, SymPy

---

*Last Updated: 2025*
*This concise guide covers the most popular Python libraries with practical examples and key features for each.*