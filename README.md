# Nexify 🍞

**Nexify** is a lightweight, customizable JavaScript toast notification library designed to display elegant and responsive messages in any web project.

---

## 🚀 Features

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
Download the CSS and JS files from the [GitHub repository](https://github.com/memotiur/nexify) and include them locally:

```html
<link rel="stylesheet" href="path/to/nexify.css">
<script src="path/to/nexify.js"></script>
```

---

## ⚙️ Usage

Display a toast notification by calling the `showToast()` function:

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

Try this simple example to see Nexify in action