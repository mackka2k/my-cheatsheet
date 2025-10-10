# Every Computer Science College Course Explained

## 💻 Intro to Programming

**Definition:** Foundation course teaching basic programming concepts and problem-solving skills.

**What You'll Learn:**
- Variables, data types, and operators
- Control structures (if/else, loops)
- Functions and procedures
- Basic algorithms and problem-solving
- Introduction to a programming language (Python, Java, or C++)

**Key Topics:**
```python
# Variables and data types
name = "Alice"
age = 20
gpa = 3.8
is_student = True

# Control structures
if age >= 18:
    print("You are an adult")
else:
    print("You are a minor")

# Loops
for i in range(5):
    print(f"Count: {i}")

# Functions
def calculate_area(length, width):
    return length * width

# Basic algorithms
def find_maximum(numbers):
    max_num = numbers[0]
    for num in numbers:
        if num > max_num:
            max_num = num
    return max_num
```

**Skills Gained:**
- Problem decomposition
- Algorithmic thinking
- Code debugging
- Basic software development
- Programming language syntax

---

## 📊 Algorithms & Data Structures

**Definition:** Core course covering fundamental algorithms and data organization methods.

**What You'll Learn:**
- Arrays, linked lists, stacks, queues
- Trees, graphs, hash tables
- Sorting and searching algorithms
- Time and space complexity analysis
- Dynamic programming and greedy algorithms

**Key Topics:**
```python
# Data Structures
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
    
    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node

# Sorting Algorithms
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)

# Binary Search
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
```

**Complexity Analysis:**
- **O(1)**: Constant time
- **O(log n)**: Logarithmic time
- **O(n)**: Linear time
- **O(n log n)**: Linearithmic time
- **O(n²)**: Quadratic time

---

## 🔢 Discrete Mathematics

**Definition:** Mathematical foundation for computer science covering discrete structures and logic.

**What You'll Learn:**
- Propositional and predicate logic
- Set theory and relations
- Combinatorics and counting
- Graph theory basics
- Proof techniques

**Key Topics:**
```python
# Set Operations
A = {1, 2, 3, 4, 5}
B = {4, 5, 6, 7, 8}

union = A | B                    # {1, 2, 3, 4, 5, 6, 7, 8}
intersection = A & B             # {4, 5}
difference = A - B               # {1, 2, 3}
symmetric_diff = A ^ B           # {1, 2, 3, 6, 7, 8}

# Permutations and Combinations
import itertools

# Permutations of 3 items from [1,2,3,4]
perms = list(itertools.permutations([1,2,3,4], 3))
print(f"Permutations: {len(perms)}")

# Combinations of 3 items from [1,2,3,4]
combs = list(itertools.combinations([1,2,3,4], 3))
print(f"Combinations: {len(combs)}")

# Graph representation
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D'],
    'C': ['A', 'D'],
    'D': ['B', 'C']
}

# Depth-First Search
def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    visited.add(start)
    print(start)
    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)
```

**Mathematical Concepts:**
- **Logic**: Boolean algebra, truth tables
- **Sets**: Operations, cardinality, power sets
- **Relations**: Equivalence, partial orders
- **Functions**: Injections, surjections, bijections
- **Proofs**: Direct, contrapositive, contradiction

---

## 🏗️ Computer Architecture

**Definition:** Study of computer system design, hardware components, and low-level programming.

**What You'll Learn:**
- CPU design and instruction sets
- Memory hierarchy and caching
- Assembly language programming
- Input/output systems
- Parallel processing concepts

**Key Topics:**
```assembly
; Assembly language example (x86)
section .data
    message db 'Hello, World!', 0xa
    length equ $ - message

section .text
    global _start

_start:
    mov eax, 4          ; sys_write
    mov ebx, 1          ; stdout
    mov ecx, message    ; message address
    mov edx, length     ; message length
    int 0x80            ; system call
    
    mov eax, 1          ; sys_exit
    mov ebx, 0          ; exit status
    int 0x80            ; system call
```

**Hardware Components:**
- **CPU**: Central Processing Unit
- **ALU**: Arithmetic Logic Unit
- **Cache**: Fast memory storage
- **RAM**: Random Access Memory
- **Storage**: Hard drives, SSDs

**Performance Metrics:**
- **Clock speed**: GHz (operations per second)
- **Cache hit ratio**: Percentage of cache hits
- **Memory bandwidth**: Data transfer rate
- **CPI**: Cycles per instruction

---

## 📐 Calculus

**Definition:** Mathematical study of continuous change, essential for understanding algorithms and optimization.

**What You'll Learn:**
- Limits and continuity
- Derivatives and differentiation
- Integrals and integration
- Series and sequences
- Applications in computer science

**Key Topics:**
```python
# Numerical differentiation
def derivative(f, x, h=1e-6):
    return (f(x + h) - f(x - h)) / (2 * h)

# Example: derivative of x²
def f(x):
    return x**2

# At x = 3, derivative should be 2x = 6
print(f"Derivative at x=3: {derivative(f, 3)}")

# Numerical integration (Trapezoidal rule)
def integrate(f, a, b, n=1000):
    h = (b - a) / n
    result = (f(a) + f(b)) / 2
    for i in range(1, n):
        result += f(a + i * h)
    return result * h

# Example: integral of x² from 0 to 1 should be 1/3
result = integrate(f, 0, 1)
print(f"Integral from 0 to 1: {result}")

# Gradient descent (optimization)
def gradient_descent(f, df, x0, learning_rate=0.01, iterations=100):
    x = x0
    for i in range(iterations):
        x = x - learning_rate * df(x)
    return x

# Example: minimize x² (minimum at x=0)
def df(x):
    return 2 * x

minimum = gradient_descent(f, df, 5.0)
print(f"Minimum found at x = {minimum}")
```

**Applications in CS:**
- **Machine Learning**: Gradient descent, backpropagation
- **Computer Graphics**: 3D transformations, lighting
- **Optimization**: Finding minima/maxima
- **Signal Processing**: Fourier transforms
- **Algorithm Analysis**: Asymptotic behavior

---

## 🔢 Linear Algebra

**Definition:** Study of vectors, matrices, and linear transformations, crucial for graphics and machine learning.

**What You'll Learn:**
- Vector operations and spaces
- Matrix operations and properties
- Eigenvalues and eigenvectors
- Linear transformations
- Applications in computer science

**Key Topics:**
```python
import numpy as np

# Vector operations
v1 = np.array([1, 2, 3])
v2 = np.array([4, 5, 6])

dot_product = np.dot(v1, v2)        # 1*4 + 2*5 + 3*6 = 32
cross_product = np.cross(v1, v2)    # [-3, 6, -3]
magnitude = np.linalg.norm(v1)      # sqrt(1² + 2² + 3²)

# Matrix operations
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

matrix_mult = np.dot(A, B)          # Matrix multiplication
determinant = np.linalg.det(A)      # Determinant
inverse = np.linalg.inv(A)          # Matrix inverse
transpose = A.T                     # Matrix transpose

# Eigenvalues and eigenvectors
eigenvals, eigenvecs = np.linalg.eig(A)
print(f"Eigenvalues: {eigenvals}")
print(f"Eigenvectors: {eigenvecs}")

# Linear transformation (rotation)
def rotate_2d(point, angle):
    cos_a, sin_a = np.cos(angle), np.sin(angle)
    rotation_matrix = np.array([[cos_a, -sin_a], [sin_a, cos_a]])
    return np.dot(rotation_matrix, point)

# Example: rotate point (1, 0) by 90 degrees
point = np.array([1, 0])
rotated = rotate_2d(point, np.pi/2)
print(f"Rotated point: {rotated}")
```

**Applications in CS:**
- **Computer Graphics**: 3D transformations, projections
- **Machine Learning**: Principal Component Analysis, neural networks
- **Image Processing**: Filters, transformations
- **Cryptography**: Matrix-based encryption
- **Scientific Computing**: Solving linear systems

---

## 🗄️ Databases

**Definition:** Study of data storage, retrieval, and management systems.

**What You'll Learn:**
- Relational database design
- SQL query language
- Database normalization
- Transaction management
- NoSQL databases

**Key Topics:**
```sql
-- Database schema
CREATE TABLE Students (
    student_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    major VARCHAR(50),
    gpa DECIMAL(3,2)
);

CREATE TABLE Courses (
    course_id INT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    credits INT,
    department VARCHAR(50)
);

CREATE TABLE Enrollments (
    student_id INT,
    course_id INT,
    grade CHAR(2),
    semester VARCHAR(20),
    PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id) REFERENCES Students(student_id),
    FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);

-- SQL Queries
-- Select all students
SELECT * FROM Students;

-- Find students with GPA > 3.5
SELECT name, gpa FROM Students WHERE gpa > 3.5;

-- Join tables to find student grades
SELECT s.name, c.title, e.grade
FROM Students s
JOIN Enrollments e ON s.student_id = e.student_id
JOIN Courses c ON e.course_id = c.course_id;

-- Aggregate functions
SELECT major, AVG(gpa) as avg_gpa, COUNT(*) as student_count
FROM Students
GROUP BY major
HAVING COUNT(*) > 5;

-- Subqueries
SELECT name FROM Students
WHERE student_id IN (
    SELECT student_id FROM Enrollments
    WHERE grade = 'A'
);
```

**Database Concepts:**
- **ACID Properties**: Atomicity, Consistency, Isolation, Durability
- **Normalization**: 1NF, 2NF, 3NF, BCNF
- **Indexing**: B-trees, hash indexes
- **Transactions**: Commit, rollback, isolation levels
- **NoSQL**: Document, key-value, column-family, graph databases

---

## 🌐 Networking

**Definition:** Study of computer networks, protocols, and distributed systems.

**What You'll Learn:**
- Network protocols (TCP/IP, HTTP, DNS)
- Network architecture and topologies
- Routing and switching
- Network security
- Distributed systems concepts

**Key Topics:**
```python
# Socket programming
import socket

# TCP Server
def tcp_server():
    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server_socket.bind(('localhost', 8080))
    server_socket.listen(5)
    
    while True:
        client_socket, address = server_socket.accept()
        message = client_socket.recv(1024).decode()
        print(f"Received: {message}")
        client_socket.send("Message received".encode())
        client_socket.close()

# TCP Client
def tcp_client():
    client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    client_socket.connect(('localhost', 8080))
    client_socket.send("Hello Server".encode())
    response = client_socket.recv(1024).decode()
    print(f"Response: {response}")
    client_socket.close()

# HTTP Client
import requests

def http_client():
    response = requests.get('https://api.github.com/users/octocat')
    if response.status_code == 200:
        data = response.json()
        print(f"User: {data['login']}")
        print(f"Followers: {data['followers']}")
```

**Network Layers (OSI Model):**
1. **Physical**: Cables, wireless signals
2. **Data Link**: Ethernet, WiFi
3. **Network**: IP, routing
4. **Transport**: TCP, UDP
5. **Session**: Connection management
6. **Presentation**: Data encryption/compression
7. **Application**: HTTP, FTP, SMTP

**Key Protocols:**
- **TCP**: Reliable, connection-oriented
- **UDP**: Fast, connectionless
- **HTTP**: Web communication
- **DNS**: Domain name resolution
- **SMTP**: Email transmission

---

## 🧠 Theory of Computation

**Definition:** Mathematical study of computation, algorithms, and computational complexity.

**What You'll Learn:**
- Automata theory (finite state machines, pushdown automata)
- Computability theory (Turing machines, halting problem)
- Complexity theory (P vs NP, complexity classes)
- Formal languages and grammars
- Algorithm analysis

**Key Topics:**
```python
# Finite State Machine
class FSM:
    def __init__(self, states, alphabet, transitions, start_state, accept_states):
        self.states = states
        self.alphabet = alphabet
        self.transitions = transitions
        self.current_state = start_state
        self.accept_states = accept_states
    
    def process_input(self, input_string):
        self.current_state = 'q0'  # Reset to start state
        for symbol in input_string:
            if symbol not in self.alphabet:
                return False
            if (self.current_state, symbol) in self.transitions:
                self.current_state = self.transitions[(self.current_state, symbol)]
            else:
                return False
        return self.current_state in self.accept_states

# Example: FSM that accepts strings ending with 'ab'
states = {'q0', 'q1', 'q2'}
alphabet = {'a', 'b'}
transitions = {
    ('q0', 'a'): 'q1',
    ('q0', 'b'): 'q0',
    ('q1', 'a'): 'q1',
    ('q1', 'b'): 'q2',
    ('q2', 'a'): 'q1',
    ('q2', 'b'): 'q0'
}
start_state = 'q0'
accept_states = {'q2'}

fsm = FSM(states, alphabet, transitions, start_state, accept_states)
print(fsm.process_input("ab"))      # True
print(fsm.process_input("aab"))     # True
print(fsm.process_input("ba"))      # False

# Turing Machine simulation
class TuringMachine:
    def __init__(self, tape, initial_state, transition_table):
        self.tape = list(tape)
        self.position = 0
        self.state = initial_state
        self.transition_table = transition_table
    
    def step(self):
        current_symbol = self.tape[self.position]
        key = (self.state, current_symbol)
        
        if key in self.transition_table:
            new_state, new_symbol, direction = self.transition_table[key]
            self.tape[self.position] = new_symbol
            self.state = new_state
            
            if direction == 'R':
                self.position += 1
            elif direction == 'L':
                self.position -= 1
            return True
        return False
```

**Complexity Classes:**
- **P**: Problems solvable in polynomial time
- **NP**: Problems verifiable in polynomial time
- **NP-Complete**: Hardest problems in NP
- **PSPACE**: Problems solvable with polynomial space
- **EXPTIME**: Problems solvable in exponential time

---

## 📊 Probability & Statistics

**Definition:** Mathematical study of uncertainty and data analysis, essential for machine learning and AI.

**What You'll Learn:**
- Probability theory and distributions
- Statistical inference and hypothesis testing
- Regression analysis
- Bayesian statistics
- Applications in computer science

**Key Topics:**
```python
import numpy as np
import matplotlib.pyplot as plt
from scipy import stats

# Probability distributions
# Normal distribution
normal_data = np.random.normal(0, 1, 1000)
plt.hist(normal_data, bins=30, alpha=0.7, label='Normal')

# Binomial distribution
binomial_data = np.random.binomial(10, 0.5, 1000)
plt.hist(binomial_data, bins=20, alpha=0.7, label='Binomial')

# Poisson distribution
poisson_data = np.random.poisson(3, 1000)
plt.hist(poisson_data, bins=20, alpha=0.7, label='Poisson')

# Statistical tests
# T-test
group1 = np.random.normal(100, 15, 30)
group2 = np.random.normal(105, 15, 30)
t_stat, p_value = stats.ttest_ind(group1, group2)
print(f"T-test p-value: {p_value}")

# Chi-square test
observed = np.array([10, 20, 30, 40])
expected = np.array([25, 25, 25, 25])
chi2_stat, p_value = stats.chisquare(observed, expected)
print(f"Chi-square p-value: {p_value}")

# Linear regression
x = np.random.randn(100)
y = 2 * x + 1 + np.random.randn(100) * 0.5
slope, intercept, r_value, p_value, std_err = stats.linregress(x, y)
print(f"Regression: y = {slope:.2f}x + {intercept:.2f}")
print(f"R-squared: {r_value**2:.2f}")

# Bayesian inference
def bayesian_update(prior, likelihood, evidence):
    posterior = (likelihood * prior) / evidence
    return posterior

# Example: Coin flip
prior_heads = 0.5  # Prior probability
likelihood_heads = 0.6  # Likelihood of heads
evidence = 0.55  # Total evidence
posterior_heads = bayesian_update(prior_heads, likelihood_heads, evidence)
print(f"Posterior probability of heads: {posterior_heads:.2f}")
```

**Statistical Concepts:**
- **Descriptive Statistics**: Mean, median, mode, standard deviation
- **Inferential Statistics**: Confidence intervals, hypothesis testing
- **Probability Distributions**: Normal, binomial, Poisson, exponential
- **Regression Analysis**: Linear, logistic, polynomial
- **Bayesian Statistics**: Prior, likelihood, posterior

---

## 🤖 Machine Learning

**Definition:** Study of algorithms that learn patterns from data without explicit programming.

**What You'll Learn:**
- Supervised learning (classification, regression)
- Unsupervised learning (clustering, dimensionality reduction)
- Neural networks and deep learning
- Model evaluation and validation
- Feature engineering and selection

**Key Topics:**
```python
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression, LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
import numpy as np

# Supervised Learning - Regression
X_reg = np.random.randn(100, 2)
y_reg = 2 * X_reg[:, 0] + 3 * X_reg[:, 1] + np.random.randn(100) * 0.1

X_train, X_test, y_train, y_test = train_test_split(X_reg, y_reg, test_size=0.2)
reg_model = LinearRegression()
reg_model.fit(X_train, y_train)
predictions = reg_model.predict(X_test)

# Supervised Learning - Classification
X_cls = np.random.randn(100, 2)
y_cls = (X_cls[:, 0] + X_cls[:, 1] > 0).astype(int)

X_train, X_test, y_train, y_test = train_test_split(X_cls, y_cls, test_size=0.2)
clf_model = RandomForestClassifier(n_estimators=100)
clf_model.fit(X_train, y_train)
predictions = clf_model.predict(X_test)

# Unsupervised Learning - Clustering
X_cluster = np.random.randn(100, 2)
kmeans = KMeans(n_clusters=3)
clusters = kmeans.fit_predict(X_cluster)

# Feature scaling
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X_cluster)

# Neural Network (simplified)
class SimpleNeuralNetwork:
    def __init__(self, input_size, hidden_size, output_size):
        self.W1 = np.random.randn(input_size, hidden_size)
        self.b1 = np.zeros((1, hidden_size))
        self.W2 = np.random.randn(hidden_size, output_size)
        self.b2 = np.zeros((1, output_size))
    
    def sigmoid(self, x):
        return 1 / (1 + np.exp(-np.clip(x, -500, 500)))
    
    def forward(self, X):
        self.z1 = np.dot(X, self.W1) + self.b1
        self.a1 = self.sigmoid(self.z1)
        self.z2 = np.dot(self.a1, self.W2) + self.b2
        self.a2 = self.sigmoid(self.z2)
        return self.a2
    
    def train(self, X, y, epochs=1000, learning_rate=0.01):
        for epoch in range(epochs):
            # Forward pass
            output = self.forward(X)
            
            # Backward pass (simplified)
            error = output - y
            dW2 = np.dot(self.a1.T, error)
            db2 = np.sum(error, axis=0, keepdims=True)
            
            # Update weights
            self.W2 -= learning_rate * dW2
            self.b2 -= learning_rate * db2
```

**ML Categories:**
- **Supervised Learning**: Learning with labeled data
- **Unsupervised Learning**: Finding patterns in unlabeled data
- **Reinforcement Learning**: Learning through interaction and rewards
- **Deep Learning**: Multi-layer neural networks
- **Transfer Learning**: Applying knowledge from one domain to another

---

## 🔒 Cybersecurity

**Definition:** Study of protecting computer systems, networks, and data from digital attacks.

**What You'll Learn:**
- Cryptography and encryption
- Network security and firewalls
- Vulnerability assessment and penetration testing
- Incident response and forensics
- Security policies and compliance

**Key Topics:**
```python
import hashlib
import secrets
from cryptography.fernet import Fernet
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
import base64

# Hashing
def hash_password(password, salt=None):
    if salt is None:
        salt = secrets.token_hex(16)
    password_hash = hashlib.pbkdf2_hmac('sha256', 
                                       password.encode('utf-8'), 
                                       salt.encode('utf-8'), 
                                       100000)
    return salt, password_hash.hex()

# Verify password
def verify_password(password, salt, stored_hash):
    _, password_hash = hash_password(password, salt)
    return password_hash == stored_hash

# Symmetric encryption
def generate_key():
    return Fernet.generate_key()

def encrypt_message(message, key):
    f = Fernet(key)
    encrypted = f.encrypt(message.encode())
    return encrypted

def decrypt_message(encrypted_message, key):
    f = Fernet(key)
    decrypted = f.decrypt(encrypted_message)
    return decrypted.decode()

# Example usage
key = generate_key()
message = "Secret message"
encrypted = encrypt_message(message, key)
decrypted = decrypt_message(encrypted, key)

# Password strength checker
def check_password_strength(password):
    score = 0
    if len(password) >= 8:
        score += 1
    if any(c.islower() for c in password):
        score += 1
    if any(c.isupper() for c in password):
        score += 1
    if any(c.isdigit() for c in password):
        score += 1
    if any(c in "!@#$%^&*()_+-=[]{}|;:,.<>?" for c in password):
        score += 1
    
    strength = ["Very Weak", "Weak", "Fair", "Good", "Strong"]
    return strength[min(score, 4)]

# Network security simulation
class Firewall:
    def __init__(self):
        self.rules = []
    
    def add_rule(self, source_ip, dest_ip, port, action):
        self.rules.append({
            'source': source_ip,
            'dest': dest_ip,
            'port': port,
            'action': action
        })
    
    def check_packet(self, source_ip, dest_ip, port):
        for rule in self.rules:
            if (rule['source'] == source_ip or rule['source'] == '*') and \
               (rule['dest'] == dest_ip or rule['dest'] == '*') and \
               (rule['port'] == port or rule['port'] == '*'):
                return rule['action']
        return 'DENY'  # Default deny
```

**Security Domains:**
- **Confidentiality**: Protecting information from unauthorized access
- **Integrity**: Ensuring information hasn't been tampered with
- **Availability**: Ensuring systems are accessible when needed
- **Authentication**: Verifying user identity
- **Authorization**: Controlling access to resources

---

## 🎮 Computer Graphics & Game Development

**Definition:** Study of creating visual content and interactive experiences using computers.

**What You'll Learn:**
- 2D and 3D graphics programming
- Rendering pipelines and shaders
- Game physics and animation
- User interface design
- Game engine architecture

**Key Topics:**
```python
import pygame
import math
import numpy as np

# 2D Graphics with Pygame
pygame.init()
screen = pygame.display.set_mode((800, 600))
clock = pygame.time.Clock()

# 3D transformations
def rotate_3d(point, angle_x, angle_y, angle_z):
    x, y, z = point
    
    # Rotation around X axis
    cos_x, sin_x = math.cos(angle_x), math.sin(angle_x)
    y, z = y * cos_x - z * sin_x, y * sin_x + z * cos_x
    
    # Rotation around Y axis
    cos_y, sin_y = math.cos(angle_y), math.sin(angle_y)
    x, z = x * cos_y + z * sin_y, -x * sin_y + z * cos_y
    
    # Rotation around Z axis
    cos_z, sin_z = math.cos(angle_z), math.sin(angle_z)
    x, y = x * cos_z - y * sin_z, x * sin_z + y * cos_z
    
    return (x, y, z)

# Project 3D to 2D
def project_3d_to_2d(point_3d, screen_width, screen_height):
    x, y, z = point_3d
    # Simple perspective projection
    if z != 0:
        x_2d = (x / (z + 5)) * 200 + screen_width // 2
        y_2d = (y / (z + 5)) * 200 + screen_height // 2
    else:
        x_2d = x + screen_width // 2
        y_2d = y + screen_height // 2
    return (int(x_2d), int(y_2d))

# Game loop
def game_loop():
    running = True
    angle = 0
    
    # 3D cube vertices
    cube_vertices = [
        (-1, -1, -1), (1, -1, -1), (1, 1, -1), (-1, 1, -1),
        (-1, -1, 1), (1, -1, 1), (1, 1, 1), (-1, 1, 1)
    ]
    
    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
        
        screen.fill((0, 0, 0))
        
        # Rotate and project cube
        rotated_vertices = []
        for vertex in cube_vertices:
            rotated = rotate_3d(vertex, angle, angle, angle)
            projected = project_3d_to_2d(rotated, 800, 600)
            rotated_vertices.append(projected)
        
        # Draw cube edges
        edges = [
            (0, 1), (1, 2), (2, 3), (3, 0),  # Front face
            (4, 5), (5, 6), (6, 7), (7, 4),  # Back face
            (0, 4), (1, 5), (2, 6), (3, 7)   # Connecting edges
        ]
        
        for edge in edges:
            start = rotated_vertices[edge[0]]
            end = rotated_vertices[edge[1]]
            pygame.draw.line(screen, (255, 255, 255), start, end, 2)
        
        angle += 0.02
        pygame.display.flip()
        clock.tick(60)
    
    pygame.quit()

# Physics simulation
class PhysicsObject:
    def __init__(self, x, y, mass=1):
        self.x = x
        self.y = y
        self.vx = 0
        self.vy = 0
        self.mass = mass
    
    def apply_force(self, fx, fy):
        self.vx += fx / self.mass
        self.vy += fy / self.mass
    
    def update(self, dt):
        self.x += self.vx * dt
        self.y += self.vy * dt
        # Simple gravity
        self.vy += 9.8 * dt
```

**Graphics Concepts:**
- **Rendering Pipeline**: Vertex processing, rasterization, fragment processing
- **Shaders**: Vertex shaders, fragment shaders, compute shaders
- **Textures**: Image mapping, UV coordinates, filtering
- **Lighting**: Phong model, PBR, global illumination
- **Animation**: Keyframes, interpolation, skeletal animation

---

## 🔌 Embedded Systems & Internet of Things (IoT)

**Definition:** Study of computer systems integrated into physical devices and connected networks.

**What You'll Learn:**
- Microcontroller programming
- Real-time systems
- Sensor integration
- Wireless communication protocols
- Power management and optimization

**Key Topics:**
```python
# Microcontroller simulation
class Microcontroller:
    def __init__(self):
        self.gpio_pins = [0] * 20  # GPIO pins
        self.adc_values = [0] * 8  # ADC values
        self.pwm_duty = [0] * 4    # PWM duty cycles
        self.timer_count = 0
    
    def digital_write(self, pin, value):
        if 0 <= pin < len(self.gpio_pins):
            self.gpio_pins[pin] = 1 if value else 0
    
    def digital_read(self, pin):
        if 0 <= pin < len(self.gpio_pins):
            return self.gpio_pins[pin]
        return 0
    
    def analog_read(self, channel):
        if 0 <= channel < len(self.adc_values):
            return self.adc_values[channel]
        return 0
    
    def pwm_write(self, pin, duty_cycle):
        if 0 <= pin < len(self.pwm_duty):
            self.pwm_duty[pin] = max(0, min(100, duty_cycle))
    
    def delay(self, milliseconds):
        import time
        time.sleep(milliseconds / 1000.0)

# IoT device simulation
class IoTDevice:
    def __init__(self, device_id):
        self.device_id = device_id
        self.mcu = Microcontroller()
        self.sensors = {}
        self.connected = False
    
    def add_sensor(self, sensor_type, pin):
        self.sensors[sensor_type] = pin
    
    def read_sensor(self, sensor_type):
        if sensor_type in self.sensors:
            pin = self.sensors[sensor_type]
            return self.mcu.analog_read(pin)
        return None
    
    def send_data(self, data):
        if self.connected:
            print(f"Device {self.device_id} sending: {data}")
            return True
        return False
    
    def connect_to_network(self):
        self.connected = True
        print(f"Device {self.device_id} connected to network")
    
    def disconnect_from_network(self):
        self.connected = False
        print(f"Device {self.device_id} disconnected from network")

# Example IoT application
def temperature_monitor():
    device = IoTDevice("temp_sensor_001")
    device.add_sensor("temperature", 0)
    device.add_sensor("humidity", 1)
    device.connect_to_network()
    
    while True:
        temp = device.read_sensor("temperature")
        humidity = device.read_sensor("humidity")
        
        if temp is not None and humidity is not None:
            data = {
                "device_id": device.device_id,
                "temperature": temp,
                "humidity": humidity,
                "timestamp": time.time()
            }
            device.send_data(data)
        
        device.mcu.delay(5000)  # Wait 5 seconds

# Real-time system simulation
class RealTimeSystem:
    def __init__(self):
        self.tasks = []
        self.current_time = 0
    
    def add_task(self, task_id, period, execution_time, priority):
        self.tasks.append({
            'id': task_id,
            'period': period,
            'execution_time': execution_time,
            'priority': priority,
            'deadline': period,
            'remaining_time': execution_time
        })
    
    def schedule_tasks(self):
        # Rate Monotonic Scheduling
        self.tasks.sort(key=lambda x: x['period'])
        
        for task in self.tasks:
            if task['remaining_time'] > 0:
                print(f"Executing task {task['id']}")
                task['remaining_time'] -= 1
                if task['remaining_time'] == 0:
                    task['deadline'] += task['period']
                    task['remaining_time'] = task['execution_time']
```

**IoT Protocols:**
- **MQTT**: Message Queuing Telemetry Transport
- **CoAP**: Constrained Application Protocol
- **HTTP/HTTPS**: Web-based communication
- **Bluetooth**: Short-range wireless
- **WiFi**: Wireless local area network
- **LoRaWAN**: Long-range wide area network

---

## 📊 Big Data & Data Science

**Definition:** Study of extracting insights from large, complex datasets using computational methods.

**What You'll Learn:**
- Data collection and preprocessing
- Statistical analysis and visualization
- Machine learning and predictive modeling
- Big data technologies (Hadoop, Spark)
- Data engineering and pipelines

**Key Topics:**
```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error, r2_score

# Data preprocessing
def preprocess_data(df):
    # Handle missing values
    df = df.fillna(df.mean())
    
    # Remove outliers using IQR method
    Q1 = df.quantile(0.25)
    Q3 = df.quantile(0.75)
    IQR = Q3 - Q1
    df = df[~((df < (Q1 - 1.5 * IQR)) | (df > (Q3 + 1.5 * IQR))).any(axis=1)]
    
    # Normalize features
    from sklearn.preprocessing import StandardScaler
    scaler = StandardScaler()
    numeric_columns = df.select_dtypes(include=[np.number]).columns
    df[numeric_columns] = scaler.fit_transform(df[numeric_columns])
    
    return df, scaler

# Exploratory Data Analysis
def exploratory_data_analysis(df):
    # Basic statistics
    print("Dataset shape:", df.shape)
    print("\nBasic statistics:")
    print(df.describe())
    
    # Missing values
    print("\nMissing values:")
    print(df.isnull().sum())
    
    # Correlation matrix
    correlation_matrix = df.corr()
    plt.figure(figsize=(10, 8))
    plt.imshow(correlation_matrix, cmap='coolwarm', aspect='auto')
    plt.colorbar()
    plt.title('Correlation Matrix')
    plt.show()
    
    # Distribution plots
    df.hist(bins=20, figsize=(12, 8))
    plt.tight_layout()
    plt.show()

# Machine Learning Pipeline
def ml_pipeline(df, target_column):
    # Split features and target
    X = df.drop(target_column, axis=1)
    y = df[target_column]
    
    # Split data
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    # Train model
    model = RandomForestRegressor(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)
    
    # Make predictions
    y_pred = model.predict(X_test)
    
    # Evaluate model
    mse = mean_squared_error(y_test, y_pred)
    r2 = r2_score(y_test, y_pred)
    
    print(f"Mean Squared Error: {mse:.2f}")
    print(f"R-squared: {r2:.2f}")
    
    # Feature importance
    feature_importance = pd.DataFrame({
        'feature': X.columns,
        'importance': model.feature_importances_
    }).sort_values('importance', ascending=False)
    
    plt.figure(figsize=(10, 6))
    plt.barh(feature_importance['feature'], feature_importance['importance'])
    plt.title('Feature Importance')
    plt.xlabel('Importance')
    plt.show()
    
    return model

# Big Data Processing (simplified)
class BigDataProcessor:
    def __init__(self):
        self.data_chunks = []
    
    def load_data_in_chunks(self, file_path, chunk_size=1000):
        """Simulate loading large datasets in chunks"""
        for chunk in pd.read_csv(file_path, chunksize=chunk_size):
            self.data_chunks.append(chunk)
    
    def process_chunks(self, processing_function):
        """Process data in parallel chunks"""
        results = []
        for chunk in self.data_chunks:
            result = processing_function(chunk)
            results.append(result)
        return results
    
    def aggregate_results(self, results):
        """Combine results from all chunks"""
        return pd.concat(results, ignore_index=True)

# Data visualization
def create_dashboard(df):
    fig, axes = plt.subplots(2, 2, figsize=(15, 10))
    
    # Time series plot
    if 'date' in df.columns:
        df['date'] = pd.to_datetime(df['date'])
        df.set_index('date').plot(ax=axes[0, 0])
        axes[0, 0].set_title('Time Series')
    
    # Scatter plot
    numeric_columns = df.select_dtypes(include=[np.number]).columns
    if len(numeric_columns) >= 2:
        axes[0, 1].scatter(df[numeric_columns[0]], df[numeric_columns[1]])
        axes[0, 1].set_xlabel(numeric_columns[0])
        axes[0, 1].set_ylabel(numeric_columns[1])
        axes[0, 1].set_title('Scatter Plot')
    
    # Box plot
    df[numeric_columns[:4]].boxplot(ax=axes[1, 0])
    axes[1, 0].set_title('Box Plot')
    
    # Histogram
    df[numeric_columns[0]].hist(bins=20, ax=axes[1, 1])
    axes[1, 1].set_title('Distribution')
    
    plt.tight_layout()
    plt.show()

# Example usage
def data_science_workflow():
    # Generate sample data
    np.random.seed(42)
    n_samples = 1000
    data = {
        'feature1': np.random.normal(0, 1, n_samples),
        'feature2': np.random.normal(0, 1, n_samples),
        'feature3': np.random.normal(0, 1, n_samples),
        'target': np.random.normal(0, 1, n_samples)
    }
    df = pd.DataFrame(data)
    
    # EDA
    exploratory_data_analysis(df)
    
    # Preprocessing
    df_processed, scaler = preprocess_data(df)
    
    # ML Pipeline
    model = ml_pipeline(df_processed, 'target')
    
    # Visualization
    create_dashboard(df_processed)
    
    return model
```

**Big Data Technologies:**
- **Hadoop**: Distributed storage and processing
- **Spark**: In-memory data processing
- **Kafka**: Real-time data streaming
- **Elasticsearch**: Search and analytics
- **MongoDB**: NoSQL database
- **Docker**: Containerization

---

## 📚 Quick Reference

### **Course Progression**
1. **Foundation**: Intro to Programming, Discrete Math
2. **Core CS**: Algorithms & Data Structures, Computer Architecture
3. **Mathematics**: Calculus, Linear Algebra, Probability & Statistics
4. **Systems**: Databases, Networking, Theory of Computation
5. **Applications**: Machine Learning, Cybersecurity, Graphics
6. **Specialization**: Embedded Systems, Big Data

### **Career Paths**
- **Software Engineer**: Programming, algorithms, systems
- **Data Scientist**: Statistics, machine learning, big data
- **Cybersecurity Analyst**: Security, networking, forensics
- **Game Developer**: Graphics, physics, user interfaces
- **Embedded Systems Engineer**: Hardware, real-time systems
- **Research Scientist**: Theory, algorithms, AI

### **Key Skills by Course**
- **Programming**: Problem-solving, debugging, software design
- **Algorithms**: Complexity analysis, optimization, data structures
- **Math**: Logical thinking, proof techniques, modeling
- **Systems**: Low-level programming, performance optimization
- **Data**: Statistical analysis, visualization, machine learning
- **Security**: Risk assessment, cryptography, incident response

---

*Last Updated: 2025*
*This comprehensive guide covers the essential computer science college courses that form the foundation of a CS education and career.*
