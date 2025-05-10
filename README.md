# Nexify 🍞

**Nexify** is a lightweight, customizable JavaScript toast notification library designed to display elegant and responsive messages in any web project.

---

## 🚀 Features

- ✅ **Super Lightweight**: Only ~8 KB total for minified CSS and JS (check [GitHub](https://github.com/memotiur/nexify) for exact sizes).
- ✅ **Simple to Use**: Minimal setup with an intuitive API.
- ✅ **Customizable Types**: Supports `success`, `danger`, and `warning` toasts.
- ✅ **Flexible Positioning**: Choose from `top-right`, `top-left`, `top-center`, `bottom-right`, `bottom-left`, or `bottom-center`.
- ✅ **Countdown Animation**: Visual timer for toast duration.
- ✅ **Close Button**: Optional dismiss button for user control.
- ✅ **Responsive Design**: Adapts seamlessly to all screen sizes.
- ✅ **Comprehensive Documentation**: Detailed guides and live demos.

---

## 📦 Installation

### Option 1: CDN
Use the following CDN links to quickly include Nexify in your project:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/memotiur/nexify/dist/nexify.min.css">
<script src="https://cdn.jsdelivr.net/gh/memotiur/nexify/dist/nexify.min.js"></script>
```

### Option 2: Local Files
Download the minified CSS and JS files from the [GitHub repository](https://github.com/memotiur/nexify) and include them locally:

```html
<link rel="stylesheet" href="path/to/nexify.min.css">
<script src="path/to/nexify.min.js"></script>
```

---

## ⚙️ Usage

Add the Nexify CDN to your project, then call the `showToast()` function to display a toast notification. It’s super easy—that's it!


```javascript
showToast("Your message here", "success", "top-right", 3000);
```

### Parameters
| Parameter  | Description                              | Values/Format                                      |
|------------|------------------------------------------|---------------------------------------------------|
| `message`  | Text to display                         | String (e.g., "Success!")                         |
| `type`     | Toast type                              | `success`, `danger`, `warning`                    |
| `position` | Toast position on the screen            | `top-right`, `top-left`, `top-center`, `bottom-right`, `bottom-left`, `bottom-center` |
| `duration` | Duration in milliseconds                | Number (e.g., 3000 for 3 seconds)                 |

---

## 📖 Documentation

Visit the [interactive documentation page](https://github.com/memotiur/nexify/blob/main/docs/index.html) for a comprehensive guide, including:

- Step-by-step installation instructions
- Detailed usage examples
- Interactive toast notification demos
- Parameter explanations
- Links to source code and licensing details

---

## ✨ Example

Copy this code, paste it into any editor, and preview the Nexify toast notification:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Nexify Example</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/memotiur/nexify/dist/nexify.min.css">
</head>
<body>
<button id="toastBtn">Show Toast</button>
<script src="https://cdn.jsdelivr.net/gh/memotiur/nexify/dist/nexify.min.js"></script>
<script>
    document.getElementById("toastBtn").addEventListener("click", function() {
        showToast("Success! Everything worked.", "success", "top-right", 3000);
    });
</script>
</body>
</html>
```

**[Live Preview on CodePen](https://codepen.io/memotiur/pen/MWzWvOX)**

---

## 🌐 Source Code

Check out the project on [GitHub](https://github.com/memotiur/nexify).

---

## 📄 License

Nexify is licensed under the [MIT License](https://github.com/memotiur/nexify/blob/main/LICENSE).

---

*Built with ❤️ by [memotiur](https://github.com/memotiur)*