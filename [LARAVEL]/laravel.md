# 1. [ABOUT] 🗄️
**What is `LARAVEL`?**

- Laravel is a free, open-source PHP framework created by Taylor Otwell, currently in version 10.
- It helps build modern web applications quickly by providing a robust set of tools and resources.

**Benefits of Laravel:**

- Excellent community and support
- Enhanced security features
- Streamlined API development
- Seamless database interaction
- Speeds up development time
- Easy email integration
- Much more!

**Requirements:**

- Composer (PHP Dependency Manager)
- XAMPP (for a local development environment)

**Installation:**

```bash
composer create-project laravel/laravel example-app
cd example-app
code .
php artisan serve
```

---

# 2. [FOLDER STRUCTURE] 📁
Here’s an emoji-enhanced breakdown of the key folders in Laravel:

- **📁 `app/`**  
  This is where most of your application's core logic resides. It contains models, controllers, middlewares, and other core functionality.
  
  - **📁 `app/Http/`**  
    Handles everything related to HTTP requests, including routes, middleware, and controllers.
    
    - **📂 `app/Http/Controllers/`**  
      Contains your controllers where your application's business logic is placed. Controllers receive user input, interact with models, and return the appropriate views.
    
    - **🛡️ `app/Http/Middleware/`**  
      Where middleware is defined to filter HTTP requests, such as authentication or request logging.

  - **📂 `app/Models/`**  
    Contains the models of your application, representing tables in the database and providing methods to interact with them.
    
  - **🔌 `app/Providers/`**  
    Service providers are responsible for bootstrapping your application. They register services and bindings in the service container.

- **⚙️ `bootstrap/`**  
  Contains the `app.php` file, which bootstraps the framework, and cache files generated during optimization processes.

- **🔧 `config/`**  
  This folder holds configuration files for various aspects of your application, such as database, cache, mail, and more.

- **🗄️ `database/`**  
  Everything related to your database:
  
  - **🏗️ `database/migrations/`**  
    Migration files that create or modify your database tables.
  
  - **🏭 `database/factories/`**  
    Model factories to generate sample data for testing.
  
  - **🌱 `database/seeders/`**  
    Seeders are used to populate the database with default data.

- **🌍 `public/`**  
  The public folder contains files that can be directly accessed by users via a web server. It includes the entry point (`index.php`), assets like images, CSS, and JavaScript.

- **🎨 `resources/`**  
  Stores your application's front-end resources:
  
  - **📑 `resources/views/`**  
    Holds your Blade templates (Laravel's templating engine), which structure your application's user interface.
    
  - **🗣️ `resources/lang/`**  
    Stores language files for supporting multiple languages in your application.

  - **🖼️ `resources/css/` & `resources/js/`**  
    Raw CSS and JavaScript files that will be compiled during the build process.

- **🛤️ `routes/`**  
  Defines your application's routes:
  
  - **🌐 `routes/web.php`** for web routes
  - **📡 `routes/api.php`** for API routes

- **📦 `storage/`**  
  Stores logs, cached data, and uploaded files:
  
  - **🗂️ `storage/app/`** for user-uploaded files.
  
  - **📝 `storage/logs/`** where log files are saved.
  
  - **💾 `storage/framework/`** for sessions, cache, and compiled views.

- **🧪 `tests/`**  
  Contains your automated tests. Laravel supports both unit and feature testing by default.

- **📚 `vendor/`**  
  Contains all the third-party libraries and dependencies installed through Composer, including Laravel’s core framework files.

- **🔒 `.env`**  
  Stores sensitive configuration values for your environment, such as database credentials, API keys, and more. Make sure this file is excluded from version control to protect sensitive data.

---
Here's an improved version of your Laravel cheatsheet, structured for readability and clarity:

---

# 3. [ROUTING BASICS] 🚦

In `routes/web.php`, you can register web routes for your application. These routes are loaded by the `RouteServiceProvider` and assigned to the "web" middleware group.

### Main Route (`/` - Root Folder)
- **The root folder (/)** is the main page.
- In the main page, we return a view named `welcome.blade.php`. 
- **Note**: You don't need to include the `.blade.php` extension when returning a view—Laravel is smart enough to understand the file by name.

```php
Route::get('/', function () {
    return view('welcome');
});
```

### Subfolder Structure for Views
- You can create sub-folders for your views, like `views/users/profile.blade.php`.
- Here’s how to create a route that points to a view in a subfolder:

```php
Route::get('/profile', function () {
    return view('users.profile');
});
```

---

# 4. [CONTROLLERS & MVC] 🛠️

**MVC** stands for **Model-View-Controller**.

- **Controller**: Handles requests and directs logic.
- **Model**: Manages the data and interactions with the database.
- **View**: Represents what is shown to the user (HTML, CSS, Blade files).

### Creating Controllers
Instead of writing logic directly in `routes/web.php`, you can better organize your code by using controllers.

### Generate a Controller with Artisan:
```bash
php artisan make:controller [ControllerName]
```

Now, instead of using anonymous functions like this:
```php
Route::get('/', function() {
    return view('welcome');
});
```

You can move the logic to a controller:

```php
<?php

namespace App\Http\Controllers;

class DashboardController extends Controller
{
    public function index()
    {
        return view('welcome');
    }
}
```

### Linking Controller Actions to Routes
To use the controller in your routes, assign the controller method as the action:

```php
Route::get('/', [DashboardController::class, 'index']);
```

Here's a polished version of **# 4. [LARAVEL BLADE 101] 🎨** that enhances readability and clarity:

---

# 5. [LARAVEL BLADE 101] 🎨

**Blade** is Laravel's powerful, lightweight templating engine that allows you to write clean, readable PHP code within your views. It provides convenient shortcuts for loops, conditionals, template inheritance, and more, making the process of creating dynamic views efficient.

## Blade Syntax Overview

### 1. Echoing Data

Use curly braces to `echo` variables directly in the view:

```php
{{ $variable }}
```

### 2. Conditionals

You can use Blade's directive for conditional statements:

```php
@if ($condition)
    <p>Condition is true.</p>
@else
    <p>Condition is false.</p>
@endif
```

### 3. Loops

Loop through arrays or collections easily:

```php
@foreach ($users as $user)
    <p>{{ $user['name'] }}</p>
@endforeach
```

### 4. Comments

Blade allows you to add comments that won’t be rendered in HTML:

```php
{{-- This is a Blade comment that won't be rendered in HTML --}}
```

---

## Displaying Data in Views

To display data in your Blade views, follow these steps:

### Step 1: Create an Array in the Controller

In your controller, create an array of data and pass it to the view:

```php
<?php

namespace App\Http\Controllers;

class DashboardController extends Controller
{
    public function index()
    {
        $users = [
            [
                'name' => 'Alex',
                'age' => 30,
            ],
            [
                'name' => 'John',
                'age' => 25,
            ],
            [
                'name' => 'Jane',
                'age' => 17,
            ],
        ];

        return view('dashboard', [
            'users' => $users,
        ]);
    }
}
```

### Step 2: Write Logic in the View File

In your view file, use the passed data to display user information:

```php
@foreach($users as $user)
    <p>Name: {{ $user['name'] }}</p>
    <p>Age: {{ $user['age'] }}</p>
    @if ($user['age'] < 18) 
        <p>User cant drive</p>
    @else 
        <p>User can drive</p>
    @endif
    <hr>
@endforeach

<p>&copy; {{ date('Y') }}</p>
```

Here’s the updated section on Blade templates and layouts:

---

# 6. [BLADE TEMPLATES & LAYOUTS] 👪

**Blade Templates** allow you to create reusable views with layouts, making your application organized and efficient.

**Creating a Layout**

A layout serves as a template for other views, containing common structure and design elements. You typically create a layout file in the `resources/views/layout` directory.

1. **Create a layout file** (e.g., `layout.blade.php`):
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>{{ config('app.name') }}</title>
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    </head>
    <body>
        <header>
            <h1>Welcome to {{ config('app.name') }}</h1>
        </header>

        <main>
            @yield('content')
        </main>

        <footer>
            <p>&copy; {{ date('Y') }}</p>
        </footer>
    </body>
    </html>
    ```
2. **Using the Layout in a View**

To extend the layout in your Blade views, use the `@extends` directive and define sections using `@section` and `@endsection`.

3. **Create a view file** (e.g., `dashboard.blade.php`):

    ```html
    @extends('layout.layout') <!-- Specify the layout to extend -->

    @section('content') <!-- Start the content section -->
        <h2>Welcome to the Dashboard!</h2>
        <p>This is where your content goes.</p>
    @endsection
    ```
---

# 7. [CONNECTING TO DATABASE] 🧾

**Connecting to a database in Laravel** is simple and can be configured through the `.env` file and the `config/database.php` configuration file. Laravel supports a wide range of databases, including MySQL, PostgreSQL, SQLite, and SQL Server.

### 1. **Configure `.env` File**

The `.env` file in Laravel contains environment-specific configuration details, including the database connection.

Open your `.env` file and update the following values to match your database setup:

```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

### 2. **Run Migrations**

Once the database connection is set up, you can run the migrations to create tables.

Use this command to apply migrations:

```bash
php artisan migrate
```

This will create the necessary tables defined in your migration files (e.g., `users`, `password_resets`, etc.).

### 3. **Testing the Connection**

You can test if the connection to your database works by using a raw query or simply checking if the migration was successful.

1. **Create the `dbconn.blade.php` file** in the `resources/views` directory:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laravel & MySQL DB Connection</title>
</head>

<body>
    <div>
        <?php
        try {
            if (DB::connection()->getPdo()) {
                echo "Connected successfully to: " . DB::connection()->getDatabaseName();
            }
        } catch (\Exception $e) {
            echo "Failed to connect to database: " . $e->getMessage();
        }
        ?>
    </div>
</body>

</html>
```

2. **Update the Route in `routes/web.php`:**

```php
use Illuminate\Support\Facades\DB;

Route::get('/dbconn', function () {
    return view('dbconn');
});
```

Here's the cheat sheet for section **# 7. [CREATING MODELS (CRUD)] 🧾**:

---

Here’s the content formatted in Markdown:

# 8. [CREATING MODELS (CRUD)] 🧱

**Models** in Laravel serve as the bridge between your application and the database. They represent tables in your database and provide methods for performing CRUD (Create, Read, Update, Delete) operations efficiently.

### 1. **Creating a Model**

To create a new model, use the Artisan command:

```bash
php artisan make:model ModelName
```

This command generates a new model file located in the `app/Models` directory. Replace `ModelName` with the desired name of your model (e.g., `User`).

### 2. **Defining a Model**

Here’s an example of a simple model for a `User`:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'email', 'password']; // Specify which fields are mass assignable
}
```

- **`fillable`**: This property defines which attributes can be mass-assigned when creating or updating a model instance.

### 3. **Creating a Database Migration**

To allow your model to interact with a database table, you need to create a migration:

```bash
php artisan make:migration create_users_table
```

In the generated migration file, define the structure of the table:

```php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('users');
    }
}
```

- **`up` method**: This method defines the columns and types of your database table.
- **`down` method**: This method is used to reverse the migration (e.g., dropping the table).

### 4. **Running Migrations**

Once you’ve defined your migration, run it to create the table in your database:

```bash
php artisan migrate
```

This command will execute all pending migrations, creating the necessary tables.

### 5. **Performing CRUD Operations**

To handle CRUD operations, you typically create a controller. Here’s how you can use the model within a controller to manage ideas, for example:

```bash
php artisan make:controller [ControllerName]
```
Controller: 
```php
<?php

namespace App\Http\Controllers;

use App\Models\Idea; // Import the Idea model

class DashboardController extends Controller
{
    public function index()
    {
        // Create a new idea
        $idea = new Idea([
            'content' => 'This is my first idea',
        ]);
        $idea->save(); // Save the idea to the database

        // Retrieve all ideas and pass them to the view
        return view('dashboard', [
            'ideas' => Idea::orderBy('created_at', 'DESC')->get(),
        ]);
    }
}
```

- **Creating a New Record**: The example demonstrates how to create and save a new idea.
- **Reading Records**: The `index` method retrieves all ideas from the database, ordered by creation date, and passes them to the view for display.

---
Here's the markdown guide for form submission in Laravel:

---

# 9. [FORM SUBMISSION] 👪

Form submission is an essential part of any web application, allowing users to send data to the server. Laravel provides an easy way to handle form submissions with built-in CSRF protection and clean routing.

---

### 1. **Creating a Form**

In Laravel, forms can be created using plain HTML, but remember to include the `@csrf` directive to protect against cross-site request forgery.

Here’s an example of a simple form to submit an idea:

```html
<h4>Share your ideas</h4>
<div class="row">
    <form action="{{ route('idea.store') }}" method="post">
        @csrf <!-- Laravel's CSRF protection -->
        <div class="mb-3">
            <textarea class="form-control" id="idea" name="idea" rows="3"></textarea> <!-- Input field for idea content -->
        </div>
        <div class="">
            <button type="submit" class="btn btn-dark">Share</button> <!-- Submit button -->
        </div>
    </form>
</div>
```

**Key Points:**

- **Action**: The form's action is the route that will handle the form data (`{{ route('idea.store') }}` in this case).
- **Method**: The method attribute is `post` to submit the form data.
- **@csrf**: This directive generates a hidden input field that includes a token to protect the form from CSRF attacks.

---

### 2. **Handling Form Submission in Controller**

Once the form is submitted, it triggers the controller’s `store` method. Here's an example of how the `IdeaController` handles the form data:

```php
<?php

namespace App\Http\Controllers;

use App\Models\Idea;
use Illuminate\Http\Request;

class IdeaController extends Controller
{
    public function store()
    {
        $idea = Idea::create(
            [
                'content' => request()->get('idea', ''),
            ]
        );
        return redirect()->route('dashboard');
    }
}
```

**Key Points:**

- **Storing Data**: The `Idea::create` method stores the form data in the database.
- **Redirection**: After processing the form, the user is redirected back to the dashboard.

---

### 3. **Routes for Form Submission**

To handle form submission, define a route in `web.php`:

```php
use App\Http\Controllers\IdeaController;
use Illuminate\Support\Facades\Route;

Route::post('/idea', [IdeaController::class, 'store'])->name('idea.store');
```

**Key Points:**

- **POST Method**: Since the form is submitting data, the route uses the `post` method.
- **Route Name**: The route is named `idea.store`, which matches the form's `action` attribute.

---

### 4. **Database Model**

Ensure you have an `Idea` model and a migration that corresponds to the form submission:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Idea extends Model
{
    use HasFactory;

    protected $fillable = ['content']; // Define fillable fields
}
```

---

### 5. **Running the Migration**

After creating the model and migration, don’t forget to run the migration:

```bash
php artisan migrate
```

This command will update the database and create the necessary tables.

---

**Summary:**

- **Create the form**: Use a POST method and include `@csrf` for protection.
- **Handle in Controller**: Validate and process the form data in the controller’s method.
- **Define Routes**: Set up routes for handling form submission.
- **Database Storage**: Use models to interact with the database and store the form data.

---
Here's a more detailed guide on flash messages:

---

# 10. [FLASH MESSAGES] 🗄️

Flash messages are used to display temporary messages to users after performing an action, such as creating, updating, or deleting a resource. They provide quick feedback to the user about the success or failure of their action.

---

### 1. **Setting a Flash Message in Controller**

In Laravel, you can set a flash message using the `with()` method when redirecting a user. For example, after successfully creating an idea, you can redirect back to the dashboard with a success message:

```php
return redirect()->route('dashboard')->with('success', 'Idea created successfully');
```

**Key Points:**

- **Flash Data**: The `with('key', 'value')` method stores data in the session, which persists only for the next request.
- **Route Redirection**: After the action, the user is redirected to the dashboard with a success message.

---

### 2. **Displaying Flash Messages in Views**

To display the flash message in your view, you check if the session has the message using `session()->has('key')`. Here’s an example of how to display the success message:

```php
@if(session()->has('success'))
    <div class="alert alert-success alert-dismissible fade show" role="alert">
        {{ session('success') }}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
@endif
```

**Key Points:**

- **Checking for Message**: `session()->has('success')` checks if there’s a flash message with the key `'success'`.
- **Displaying Message**: If the message exists, it’s displayed inside an alert box.
- **Bootstrap Integration**: The example uses Bootstrap's alert component to display the message. The `alert-dismissible fade show` classes are used for a dismissible alert with a close button.
---
# 11. [VALIDATION] 🗄️

**Validation** ensures user input meets specific rules before saving it.

1. **Controller Validation**  
   Validate the form data using `validate()`:
   ```php
   request()->validate([
       'idea' => 'required|string|min:5|max:255',
   ]);
   ```

2. **Displaying Errors**  
   Show validation error messages in the form:
   ```php
   @error('idea')
       <span class="text-danger">{{ $message }}</span>
   @enderror
   ```

3. **Form Example**
   ```html
   <form action="{{ route('idea.store') }}" method="post">
       @csrf
       <textarea name="idea">{{ old('idea') }}</textarea>
       @error('idea')
			<span class="text-danger">{{ $message }}</span>
	   @enderror
       <button type="submit">Share</button>
   </form>
   ```

---

# 12. [PAGINATION] 🗄️

**Pagination** helps divide large data sets into manageable chunks.

1. **Controller Pagination**  
   Retrieve and paginate records:
   ```php
   public function index()
   {
       return view('dashboard', [
           'ideas' => Idea::orderBy('created_at', 'DESC')->paginate(5),
       ]);
   }
   ```

2. **Displaying Links**  
   Add pagination links to your Blade view:
   ```php
   {{ $ideas->links() }}
   ```

3. **Using Bootstrap Pagination**  
   Configure pagination to use Bootstrap 5, if you don't need tailwind by default.
   ```php
   public function boot(): void
   {
       Paginator::useBootstrapFive();
   }
   ```
---

Here’s the section on how to delete an idea in a CRUD application formatted according to your preferences:

# 13. [HOW TO DELETE (CRUD)] 🗄️

To implement the `delete` functionality, you need to create a form that submits a `DELETE` request to the designated route. Here’s the structure of the form:

```php
<div>
    <form method="POST" action="{{ route('ideas.destroy', $idea->id) }}">
        @csrf
        @method('DELETE')
        <button type="submit" class="btn btn-danger btn-sm">X</button>
    </form>
</div>
```
- **Method**: The form uses the `POST` method to submit the data.
- **CSRF Token**: The `@csrf` directive generates a hidden input field containing a CSRF token to protect against cross-site request forgery.
- **HTTP Method Override**: The `@method('DELETE')` directive indicates that this form is intended to perform a `DELETE` operation.

**Route Definition**

In your routes file (usually `web.php`), define the route for deleting an idea as follows:

```php
Route::delete('/ideas/{id}', [IdeaController::class, 'destroy'])->name('ideas.destroy');
```
- **URI**: This route listens for `DELETE` requests at the specified URI and expects an `id` parameter.
- **Controller**: The request is handled by the `destroy` method of the `IdeaController`.

**Controller Method**

In your `IdeaController`, implement the `destroy` method to handle the deletion logic:

```php
public function destroy($id)
{
    $idea = Idea::where('id', $id)->firstOrFail()->delete();

    return redirect()->route('dashboard')->with('success', 'Idea deleted successfully');
}
```
- **Find the Idea**: The method uses `firstOrFail()` to retrieve the idea by its ID. If the idea is not found, a `404` response will be returned.
- **Delete the Idea**: The `delete()` method is called to remove the idea from the database.
- **Redirect with Message**: After deletion, the user is redirected back to the dashboard with a success message using session data.

---

Your section on **Route Model Binding** looks great! It effectively highlights how to simplify your code in Laravel by utilizing route model binding. Here’s a refined version of your content, with some additional context and explanations for clarity.

# 14. [ROUTE MODEL BINDING] 🗄️

**Route model binding helps to shorten the code we write and improve its quality.** Instead of manually fetching the model instance from the database using the ID, Laravel automatically resolves the model based on the route parameters.

**HTML Form for Deleting an Idea:**
```php
<form method="POST" action="{{ route('ideas.destroy', $idea) }}">
    @csrf
    @method('DELETE')
    <button class="btn btn-danger btn-sm">X</button>
</form>
<a href="{{ route('ideas.show', $idea) }}" class="btn btn-primary btn-sm">View</a>
```

In this example, `$idea` is passed directly to the `route()` helper, which Laravel uses to resolve the model automatically based on the route parameter.

**Controller Method for Showing an Idea:**
```php
public function show(Idea $idea)
{
    return view('ideas.show', compact('idea'));
}
```

Here, Laravel automatically fetches the `Idea` instance corresponding to the ID in the route, allowing you to work directly with the model instance.

**Benefits of Route Model Binding**

1. **Cleaner Code:** Eliminates the need for repetitive code to retrieve models from the database.
2. **Automatic Resolution:** Laravel takes care of fetching the model based on the ID provided in the route, reducing the chance of errors.
3. **Simplified Controllers:** Makes your controller methods cleaner and easier to read by directly accepting model instances.
---

Your **"How to Update (CRUD)"** guide is comprehensive! I’ve added some structure and context to each part to make it more reader-friendly. Here's the refined step-by-step breakdown of how to implement update functionality in a Laravel CRUD application.

---

# 15. [HOW TO UPDATE (CRUD)] 🗄️

Updating an idea involves multiple steps: defining the routes, creating the edit button, and implementing the `edit` and `update` methods. Let’s go through it step-by-step.

1. **Defining the Edit and Update Routes**

```php
// Route to display the edit form.
Route::get('/ideas/{idea}/edit', [IdeaController::class, 'edit'])->name('ideas.edit');

// Route to handle the update operation.
Route::put('/ideas/{idea}', [IdeaController::class, 'update'])->name('ideas.update');
```

This ensures that when a user clicks on "Edit," they are taken to the form where they can modify the idea, and the form submission will trigger the `update` route.

2. **Edit Button in the View**
Create an edit button within the view to allow users to navigate to the edit form.

```php
<a href="{{ route('ideas.edit', $idea->id) }}" class="btn btn-primary btn-sm">Edit</a>
```

This button will take the user to the edit form for the specific idea by using the `ideas.edit` route and passing the idea’s ID.

3. **Edit Method in the Controller**
Implement the `edit` method to handle fetching the idea and displaying it in the view:

```php
public function edit(Idea $idea)
{
    $editing = true;  // Set a flag to indicate that the view is in "edit mode."

    return view('ideas.show', compact('idea', 'editing'));
}
```

The `$editing` flag can be used in the view to determine if the form should be displayed or not. This allows you to reuse the same view for both displaying and editing ideas.

4. **Update Method in the Controller**
Implement the `update` method to handle form submissions and save the updated content to the database:

```php
public function update(Idea $idea)
{
    request()->validate([
        'content' => 'required|min:3|max:240',
    ]);

    $idea->content = request()->get('content'); // Get the updated content.
    $idea->save();  // Save the changes.

    return redirect()->route('ideas.show', $idea->id)
        ->with('success', 'Idea updated successfully');
}
```

This method validates the incoming request data and updates the `content` of the idea, saving it to the database.

5. **Edit Form in the View**
Modify the view to include the edit form based on the `$editing` flag. Here’s how the card body can conditionally display either the form or the idea content:

```html
<div class="card-body">
    @if ($editing ?? false)
    <form action="{{ route('ideas.update', $idea->id) }}" method="POST">
        @csrf
        @method('PUT')
        <div class="mb-3">
            <textarea name="content" class="form-control" id="content" rows="3">{{ $idea->content }}</textarea>
            @error('content')
            <span class="d-block fs-6 text-danger mt-2">{{ $message }}</span>
            @enderror
        </div>
        <div class="">
            <button type="submit" class="btn btn-dark mb-2 btn-sm">Update</button>
        </div>
    </form>
    @else
    <p class="fs-6 fw-light text-muted">
        {{ $idea->content }}  <!-- Display the idea content if not in edit mode -->
    </p>
    @endif
</div>
```

**Breakdown of the Code:**
1. **Check if `$editing` is true:**
   - If `true`, display a form pre-filled with the current idea content.
   - If `false`, display the regular content.

2. **Form Submission:**
   - The form submits a `PUT` request to the `ideas.update` route.

3. **Error Handling:**
   - If validation fails, display the error messages under the form.

---

# 16. [SEARCH BAR (CRUD)] 🗄️

Adding a search bar to filter your ideas in a Laravel CRUD system.

1. **Create the Search Bar**

Add a search form to your Blade view (e.g., in `dashboard.blade.php`):

```html
<form action="{{ route('dashboard') }}" method="GET">
    <input name="search" placeholder="Search..." class="form-control w-100" type="text">
    <button class="btn btn-dark mt-2">Search</button>
</form>
```

2. **Handling the Search Request in the Controller**

In your controller, modify the query to filter results based on the search term:

```php
if (request()->has('search')) {
    $ideas = $ideas->where('content', 'like', '%' . request()->get('search', '') . '%');
}
```

- **Explanation**: This code checks if the `search` parameter is present in the request. If it is, the query filters the `ideas` based on the content containing the search term (using the SQL `LIKE` operator with `%` for wildcards).


Here's the content for section **#17. [CREATING COMMENTS (RELATIONSHIPS)] 🗄️** formatted in your preferred style:

---

# 17. [CREATING COMMENTS (RELATIONSHIPS)] 🗄️

In this section, you'll learn how to create comments related to ideas using **Eloquent relationships** in Laravel.

1. **Create the `Comment` Model with Migration and Controller**

Run the following command to create a `Comment` model with a migration and controller:

```bash
php artisan make:model Comment -m -c
```

2. **Define the `comments` Table in the Migration**

Modify the `up` method in the generated migration file to define the `comments` table:

```php
public function up(): void
{
    Schema::create('comments', function (Blueprint $table) {
        $table->id();
        $table->foreignId('idea_id')->constrained()->cascadeOnDelete();
        $table->string('content');
        $table->timestamps();
    });
}
```

- **Explanation**: This table will store each comment with a reference to the related `idea` through `idea_id`. The `cascadeOnDelete()` ensures that comments are deleted when the associated idea is deleted.

3. **Define the Route for Comment Creation**

In `routes/web.php`, define a `POST` route for storing comments:

```php
Route::post('/ideas/{idea}/comments', [CommentController::class, 'store'])->name('ideas.comments.store');
```

4. **Add Logic to the Comment Controller**

In the `CommentController`, implement the `store` method to handle comment submission:

```php
class CommentController extends Controller
{
    public function store(Idea $idea)
    {
        $comment = new Comment();
        $comment->idea_id = $idea->id;
        $comment->content = request()->get('content');
        $comment->save();

        return redirect()->route('ideas.show', $idea->id)
            ->with('success', 'Comment added successfully');
    }
}
```

- **Explanation**: The `store` method creates a new comment associated with the given `idea`, saves it, and redirects back to the idea's detail page with a success message.

5. **Define the Relationship in the `Idea` Model**

In the `Idea` model, define the relationship with comments:

```php
public function comments()
{
    return $this->hasMany(Comment::class);
}
```

``hasMany(Comment::class)`` nurodo:
- Viena idėja gali turėti daugybę komentarų.
- Kiekvienas komentaras turi savo idea_id, kuris nurodo, prie kurios idėjos jis priklauso.
- Ši santykių nuoroda leidžia Laravel automatiškai sukurti užklausas, kad gautų visus komentarus, kurie yra susiję su konkrečia idėja.

6. **Create the Comment Form in the View**

In the idea's detail view (e.g., `ideas/show.blade.php`), add a form for submitting comments and display existing comments:

```php
<div class="mt-4">
    <form action="{{ route('ideas.comments.store', $idea->id) }}" method="POST">
        @csrf
        <div class="mb-3">
            <textarea name="content" class="fs-6 form-control" rows="1" placeholder="Write a comment..."></textarea>
        </div>
        <div>
            <button type="submit" class="btn btn-primary btn-sm">Post Comment</button>
        </div>
    </form>
    <hr>
    @foreach ($idea->comments as $comment)
    <div class="d-flex align-items-start mt-3">
        <img style="width: 35px;" class="me-2 avatar-sm rounded-circle"
             src="https://api.dicebear.com/6.x/fun-emoji/svg?seed=Luigi" alt="Luigi Avatar">
        <div class="w-100">
            <div class="d-flex justify-content-between">
                <h6>Luigi</h6>
                <small class="fs-6 fw-light text-muted">{{ $comment->created_at }}</small>
            </div>
            <p class="fs-6 mt-3 fw-light">{{ $comment->content }}</p>
        </div>
    </div>
    @endforeach
</div>
```

- **Explanation**: This code includes a form to submit comments and loops through the existing comments to display them, using placeholders for user avatars and details.


   
---
# 18. [NPM-WEBPACK CONFIGURATION] 🗄️

1. **Install Node.js** (includes NPM):
   - Download: [Node.js Download](https://nodejs.dev/en/download/)
   - Run the installer and follow the prompts.

2. **Create `package.json`**:
   - In a new Laravel project, `package.json` is automatically created. If it’s missing, run:
     ```bash
     npm init
     ```

3. **Update `package.json`**:
   Replace the existing content with:
   ```json
   {
       "scripts": {
           "dev": "npm run development",
           "development": "mix",
           "watch": "mix watch",
           "watch-poll": "mix watch -- --watch-options-poll=1000",
           "hot": "mix watch --hot",
           "prod": "npm run production",
           "production": "mix --production"
       },
       "devDependencies": {
           "axios": "^0.21",
           "laravel-mix": "^6.0.6"
       }
   }
   ```

4. **Create `.gitignore`**:
   Add the following lines:
   ```plaintext
   /.idea
   /node_modules
   /public/hot
   /public/storage
   /public/js
   /public/css
   /public/build
   /public/mix-manifest.json
   /storage/*.key
   /vendor
   .env
   .env.backup
   .phpunit.result.cache
   Homestead.json
   Homestead.yaml
   npm-debug.log
   yarn-error.log
   ```

5. **Install NPM Dependencies**:
   ```bash
   npm install
   ```

6. **Configure Webpack**:
   In the root directory of your Laravel project, create `webpack.mix.js`:
   ```javascript
   const mix = require('laravel-mix');

   mix.js('resources/assets/js/app.js', 'public/js')
      .sass('resources/assets/scss/app.scss', 'public/css')
      .sourceMaps();

   if (mix.inProduction()) {
       mix.version();
   }
   ```

7. **Asset Compilation**:
   - Create an `assets` directory and move `app.js`, `bootstrap.js`, and create a `scss` subdirectory for `app.scss`. Remove old `js` and `css` directories.
   - Run:
     ```bash
     npm run dev
     ```

8. **Link Compiled Assets**:
   In your Blade template, add:
   ```html
   <script type="text/javascript" src="{{ mix('js/app.js') }}"></script>
   <link rel="stylesheet" href="{{ mix('css/app.css') }}">
   ```

9. **Installing JavaScript Libraries**:
   - Find the library on [NPM](https://www.npmjs.com/), copy the installation command, and run it in the console.
   - Open `bootstrap.js` and add:
     ```javascript
     const flatpickr = require('flatpickr');
     ```

10. **CSS Libraries**:
    - Use `@import` to add the CSS library in your SCSS file.
    - Make sure to run:
      ```bash
      npm run dev
      ```
---

# 19. [ADD BOOTSRAP/JQUERY] 🗄️

To include Bootstrap in your Laravel project's `app.scss` and `app.js` files, follow these steps:

**Step 1: Install Bootstrap**

First, ensure you have Bootstrap installed in your Laravel project using npm. Run the following command in your project directory:

```bash
npm install bootstrap
```

**Step 2: Include Bootstrap in `app.scss`**

1. Open the `resources/css/app.scss` file.
2. Add the following line at the top to import Bootstrap's CSS:

```scss
@import '~bootstrap/scss/bootstrap';
```

Your `app.scss` file should look something like this:

```scss
// resources/css/app.scss

@import '~bootstrap/scss/bootstrap';

// Add any custom styles below
```

**Step 3: Include Bootstrap in `app.js`**

1. Open the `resources/js/app.js` file.
2. Add the following lines to import jQuery and Bootstrap's JavaScript components:

```javascript
// resources/js/app.js

require('jquery');
require('bootstrap');

// You can add custom JavaScript below
```

**Step 4: Compile Assets**

After making these changes, you'll need to compile your assets. Run the following command:

```bash
npm run dev
```

This will compile your `app.scss` and `app.js` files, applying the Bootstrap styles and scripts to your Laravel application.

**Step 5: Verify in Your Blade Template**

Finally, ensure you include the compiled CSS and JS files in your Blade template (e.g., `app.blade.php`). Add the following lines in the `<head>` and before the closing `</body>` tag, respectively:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ config('app.name') }}</title>
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
</head>
<body>
    <header>
        <h1>Welcome to {{ config('app.name') }}</h1>
    </header>

    <main>
        @yield('content')
    </main>

    <footer>
        <p>&copy; {{ date('Y') }}</p>
    </footer>

    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
```
---
# 20. [WHAT IS `$FILLABLE`, `$GUARDED`, & `$VALIDATED`] 🗄️

In Laravel, `$fillable`, `$guarded`, and `$validated` are key concepts for safely handling mass assignment and form validation.

### `$fillable`
- **Purpose**: Specifies which fields are allowed for mass assignment.
- **Use Case**: When you want to control which fields can be inserted/updated in bulk to prevent malicious data from being assigned.

```php
protected $fillable = [
    'content',
    'like',
];
```

### `$guarded`
- **Purpose**: Specifies which fields are **not** allowed for mass assignment.
- **Use Case**: When you want to explicitly protect certain fields from being mass assigned.
  
```php
protected $guarded = [
    'id',
    'created_at',
    'updated_at',
];
```

**Note**: Setting `$guarded = []` will allow **all** fields to be mass assignable, which is risky and should be avoided.

---

### `$validated`
- **Purpose**: Validates the incoming request data before saving it.
- **Use Case**: Ensures that only clean, validated data is processed and stored.

```php
$validated = request()->validate([
    'content' => 'required|min:3|max:240',
]);
```
Using `$validated` ensures the data is properly validated before passing it to `Idea::create()` or other mass assignment functions, enhancing security and reliability.

---

**Example in `store()` Method**

```php
public function store()
{
    // Validate input
    $validated = request()->validate([
        'content' => 'required|min:3|max:240',
    ]);

    // Create a new idea using validated data
    Idea::create($validated);

    // Redirect with success message
    return redirect()->route('dashboard')
        ->with('success', 'Idea created successfully');
}
```

In this example:
- **`$fillable`** ensures only the allowed fields (like `content`) are mass assigned.
- **`$validated`** ensures that only clean and valid data is processed.
---
# 21. [REGISTRATION] 🗄️

**Registration Form View**

```php
@extends('layout.layout')
@section('content')
<div class="row justify-content-center">
    <div class="col-12 col-sm-8 col-md-6">
        <form class="form mt-5" action="{{ route('register') }}" method="post">
            @csrf
            <h3 class="text-center text-dark">Register</h3>

            <!-- Name Field -->
            <div class="form-group">
                <label for="name" class="text-dark">Name:</label><br>
                <input type="text" name="name" id="name" class="form-control" required>
                @error('name')
                <span class="d-block fs-6 text-danger mt-2">{{ $message }}</span>
                @enderror
            </div>

            <!-- Email Field -->
            <div class="form-group mt-3">
                <label for="email" class="text-dark">Email:</label><br>
                <input type="email" name="email" id="email" class="form-control" required>
                @error('email')
                <span class="d-block fs-6 text-danger mt-2">{{ $message }}</span>
                @enderror
            </div>

            <!-- Password Field -->
            <div class="form-group mt-3">
                <label for="password" class="text-dark">Password:</label><br>
                <input type="password" name="password" id="password" class="form-control" required>
                @error('password')
                <span class="d-block fs-6 text-danger mt-2">{{ $message }}</span>
                @enderror
            </div>

            <!-- Confirm Password Field -->
            <div class="form-group mt-3">
                <label for="confirm-password" class="text-dark">Confirm Password:</label><br>
                <input type="password" name="password_confirmation" id="confirm-password" class="form-control" required>
                @error('password_confirmation')
                <span class="d-block fs-6 text-danger mt-2">{{ $message }}</span>
                @enderror
            </div>

            <!-- Submit Button -->
            <div class="form-group">
                <input type="submit" name="submit" class="btn btn-dark btn-md" value="Register">
            </div>

            <!-- Redirect to Login -->
            <div class="text-right mt-2">
                <a href="/login" class="text-dark">Already have an account? Login here</a>
            </div>
        </form>
    </div>
</div>
@endsection
```

**AuthController for Registration**

```php
namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    // Show the registration form
    public function register()
    {
        return view('auth.register');
    }

    // Handle registration data submission
    public function store(Request $request)
    {
        // Validate the form data
        $validated = $request->validate([
            'name' => 'required|min:3|max:40',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|confirmed|min:8',
        ]);

        // Create a new user with the hashed password
        User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
        ]);

        // Redirect to dashboard with success message
        return redirect()->route('dashboard')
            ->with('success', 'User registered successfully');
    }
}
```

**Routes for Registration**

```php
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

// Registration routes
Route::get('/register', [AuthController::class, 'register'])->name('register');
Route::post('/register', [AuthController::class, 'store']);
```

**Explanation of Key Elements**

1. **`Hash::make`**:
   - This function is used to securely hash the user's password before storing it in the database. It's crucial for ensuring password security.

   ```php
   'password' => Hash::make($validated['password']),
   ```

2. **`name="password_confirmation"`**:
   - This field is used to confirm the password. Laravel automatically looks for `password_confirmation` when using the `confirmed` rule in validation.

   ```php
   <input type="password" name="password_confirmation" id="confirm-password" class="form-control" required>
   ```

   The `confirmed` rule ensures the `password` and `password_confirmation` fields match:

   ```php
   'password' => 'required|confirmed|min:8',
   ```
---
# 22. [AUTHORIZATION BASICS] 🗄️

Authorization ensures that only authenticated users with appropriate permissions can perform specific actions in your application. Below are some fundamental practices for authorizing users based on their ownership of resources or permissions.

1. **Database Structure**

**`ideas` Table Schema**

Each `idea` is associated with a `user` who owns it. The `likes` column tracks how many users like the idea.

```php
Schema::create('ideas', function (Blueprint $table) {
    $table->id();
    $table->foreignId('user_id')->constrained()->cascadeOnDelete(); // Relates to users
    $table->string('content'); // The idea content
    $table->unsignedInteger('likes')->default(0); // Likes count
    $table->timestamps();
});
```

**`comments` Table Schema**

Each `comment` is tied to both a `user` (who made the comment) and an `idea` (the idea being commented on).

```php
Schema::create('comments', function (Blueprint $table) {
    $table->id();
    $table->foreignId('user_id')->constrained()->cascadeOnDelete(); // Relates to users
    $table->foreignId('idea_id')->constrained()->cascadeOnDelete(); // Relates to ideas
    $table->string('content'); // The comment content
    $table->timestamps();
});
```

2. **Authorization Logic**

**Restricting Access to Resource Owners**

To restrict access so that only the owner of the `idea` can edit or delete it, compare the `user_id` of the resource with the currently authenticated user's ID.

```php
if (Auth::id() !== $idea->user_id) {
    abort(404); // Or use a 403 Forbidden response for better clarity
}
```

3. **Model Relationships

**User to Idea Relationship**

A `User` can have many `Ideas`.

```php
public function ideas()
{
    return $this->hasMany(Idea::class);
}
```

**Idea to User Relationship**

An `Idea` belongs to a `User`.

```php
public function user()
{
    return $this->belongsTo(User::class);
}
```

**Idea Deletion Cascade**

When a user is deleted, their associated ideas are also deleted to maintain database integrity.

```php
$table->foreignId('user_id')->constrained()->cascadeOnDelete();
```

4. **Database Refresh Command**

To apply the new schema or reset the database, use:

```bash
php artisan migrate:refresh
```

5. **Routes with Authorization**

Apply the `auth` middleware to routes to ensure only authenticated users can access them. For example:

```php
Route::get('/ideas/{idea}/edit', [IdeaController::class, 'edit'])->name('ideas.edit')->middleware('auth');

Route::put('/ideas/{idea}', [IdeaController::class, 'update'])->name('ideas.update')->middleware('auth');

Route::delete('/ideas/{idea}', [IdeaController::class, 'destroy'])->name('ideas.destroy')->middleware('auth');

Route::post('/ideas/{idea}/comments', [CommentController::class, 'store'])->name('ideas.comments.store')->middleware('auth');
```

**Explanation of Key Elements

1. **Foreign Key Constraints with Cascade**:  
   Ensures that when a user is deleted, their associated ideas or comments are also removed.

   ```php
   $table->foreignId('user_id')->constrained()->cascadeOnDelete();
   ```

2. **Auth Middleware**:  
   Protects routes from unauthorized access by ensuring only logged-in users can perform actions.

3. **Owner Verification**:  
   This block checks whether the current user is the owner of the idea before performing restricted actions like editing or deleting.

   ```php
   if (Auth::id() !== $idea->user_id) {
       abort(404);
   }
   ```
---
# 21. [ROUTE GROUPING] 🗄️

Route grouping helps to organize routes that share common attributes, such as a prefix or middleware. This is particularly useful for maintaining cleaner and more efficient route files in Laravel.

**Example: Grouping Routes for `ideas`**

In the following example, all routes are prefixed with `ideas/` and named with the `ideas.` prefix. Additionally, a nested route group with the `auth` middleware ensures that certain actions (such as creating, editing, updating, and deleting) are only accessible to authenticated users.

**Code Explanation**

```php
Route::group(['prefix' => 'ideas/', 'as' => 'ideas.'], function () {
    // Publicly accessible routes
    Route::post('', [IdeaController::class, 'store'])->name('store'); // Route for storing new ideas
    Route::get('/{idea}', [IdeaController::class, 'show'])->name('show'); // Route for viewing a specific idea

    // Routes accessible only to authenticated users
    Route::group(['middleware' => 'auth'], function () {
        Route::get('/create', [IdeaController::class, 'create'])->name('create'); // Create form for ideas
        Route::get('/{idea}/edit', [IdeaController::class, 'edit'])->name('edit'); // Edit form for ideas
        Route::put('/{idea}', [IdeaController::class, 'update'])->name('update'); // Update an idea
        Route::delete('/{idea}', [IdeaController::class, 'destroy'])->name('destroy'); // Delete an idea
        Route::post('/{idea}/comments', [CommentController::class, 'store'])->name('comments.store'); // Add comments to an idea
    });
});
```

**Breakdown:**

- **Prefix & Naming Convention**:  
  The `prefix` is `ideas/`, so all the routes inside the group will be prefixed with `ideas/`. The `as` key sets the route name prefix to `ideas.`, so route names become `ideas.store`, `ideas.show`, etc.
  
- **Public Routes**:
  - `POST /ideas`: Route to create new ideas.
  - `GET /ideas/{idea}`: Route to view a specific idea.

- **Protected Routes (with `auth` middleware)**:
  - `GET /ideas/create`: Only authenticated users can access the form to create a new idea.
  - `GET /ideas/{idea}/edit`: Only authenticated users can edit their own ideas.
  - `PUT /ideas/{idea}`: Update the existing idea.
  - `DELETE /ideas/{idea}`: Delete the idea.
  - `POST /ideas/{idea}/comments`: Add comments to a specific idea.

---
# 21. [RESOURCE ROUTING] 🗄️

In Laravel, **resource routing** provides a convenient way to define routes for a controller that handles CRUD (Create, Read, Update, Delete) operations. The `Route::resource` method automatically creates multiple routes to handle a variety of RESTful actions.

**Code Explanation**

```php
Route::resource('ideas', IdeaController::class)->except(['index', 'create', 'show'])->middleware('auth');

Route::resource('ideas', IdeaController::class)->only(['show']);

Route::resource('ideas.comments', CommentController::class)->only(['store'])->middleware('auth');
```

1. **Authenticated Routes for `ideas`**

```php
Route::resource('ideas', IdeaController::class)
    ->except(['index', 'create', 'show'])
    ->middleware('auth');
```

- **Purpose**: Defines routes for `ideas` that require user authentication, excluding `index`, `create`, and `show` methods.
- **Generated Routes**:
  - `POST /ideas` → `IdeaController@store`
  - `GET /ideas/{idea}/edit` → `IdeaController@edit`
  - `PUT/PATCH /ideas/{idea}` → `IdeaController@update`
  - `DELETE /ideas/{idea}` → `IdeaController@destroy`
- **Middleware**: Applying `middleware('auth')` ensures that only authenticated users can access these routes.

2. **Public `show` Route for `ideas`**

```php
Route::resource('ideas', IdeaController::class)
    ->only(['show']);
```

- **Purpose**: Defines the `show` route for `ideas`, allowing any user (authenticated or guest) to view individual ideas.
- **Generated Route**:
  - `GET /ideas/{idea}` → `IdeaController@show`

3. **Authenticated Routes for `ideas.comments`**

```php
Route::resource('ideas.comments', CommentController::class)
    ->only(['store'])
    ->middleware('auth');
```

- **Purpose**: Defines the `store` route for adding comments to ideas, requiring user authentication.
- **Generated Route**:
  - `POST /ideas/{idea}/comments` → `CommentController@store`
- **Nested Resource**: The route is nested under `ideas`, indicating that comments belong to specific ideas.
- **Middleware**: Ensures only authenticated users can post comments.

**Benefits of Using Resource Routing**

- **Simplifies Route Definitions**: Automatically generates standard CRUD routes without manually defining each one.
- **Consistency**: Adheres to Laravel's conventions, making the codebase more maintainable.
- **Customization**: Methods like `except()` and `only()` allow you to include or exclude specific routes as needed.
- **Middleware Integration**: Easily apply middleware to groups of routes for access control.

**Summary**

- **Resource Routes**: Efficiently create multiple routes for a controller using `Route::resource`.
- **Route Customization**: Use `except()` to exclude routes and `only()` to include specific routes.
- **Authentication Middleware**: Protect certain routes by applying `middleware('auth')`.
- **Nested Resources**: Manage related resources (like comments for ideas) using nested resource routes.

---
# 21. [FIX PAGINATION NOT HAVING QUERY STRINGS] 🗄️

**Problem**
When using pagination with a search or filter functionality, query strings like `?search=query` can be lost when navigating through pages. This happens because the pagination links do not automatically retain the query parameters.

**Solution**
To fix this, we use the **`withQueryString()`** method in Laravel pagination, which ensures that all current query string parameters (e.g., search queries or filters) are included when generating pagination links.

1. **Update Pagination Links with Query String**

In your Blade template where pagination is displayed, ensure the `withQueryString()` method is applied:

```php
<div class="mt-3">
    {{ $ideas->withQueryString()->links() }}
</div>
```

- **`$ideas->withQueryString()`**: This method keeps the current query string parameters (like search terms) in the pagination links. It ensures that when users click on the pagination links, they do not lose the applied filters or search terms.

2. **Search Bar Implementation**

Here's how the search form should look to retain the query string when submitting a search request:

```php
<div class="card">
    <div class="card-header pb-0 border-0">
        <h5 class="">Search</h5>
    </div>
    <div class="card-body">
        <form action="{{ route('dashboard')}}" method="GET">
            <!-- Retain the search input value with request() helper -->
            <input value="{{ request('search', '') }}" name="search" placeholder="Search..." class="form-control w-100" type="text">
            <button class="btn btn-dark mt-2"> Search</button>
        </form>
    </div>
</div>
```

3. **Full Blade Template Example**

```php
@extends('layout.layout')
@section('content')

<div class="row">
    <div class="col-3">
        @include('shared.left-sidebar')
    </div>
    <div class="col-6">
        @include('shared.success-message')
        @include('shared.submit-idea')
        <hr>
        @forelse ($ideas as $idea)
        <div class="mt-3">
            @include('shared.idea-card')
        </div>
        @empty
        <div class="alert alert-info">
            No ideas found.
        </div>
        @endforelse
        <div class="mt-3">
            <!-- Pagination with query string -->
            {{ $ideas->withQueryString()->links() }}
        </div>
    </div>

    <div class="col-3">
        @include('shared.search-bar')
        @include('shared.follow-box')
    </div>
</div>

@endsection
```

**Summary**

1. **`withQueryString()`** is used to preserve query parameters when paginating results.
2. **Search Form**: Retains the previous search input using the `request()` helper so users can see the term they searched for.
3. **Enhanced User Experience**: The query string (e.g., search term) will be preserved across paginated pages, preventing users from losing their search or filter results when they move between pages.

---
