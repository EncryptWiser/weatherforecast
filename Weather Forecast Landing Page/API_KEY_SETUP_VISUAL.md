# 🎯 Visual Guide: Where to Paste Your API Key

## Step-by-Step with Code Examples

### 1️⃣ Get Your API Key

After signing up at https://openweathermap.org/api, your API key will look like this:

```
a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6
```

Copy this entire string!

---

### 2️⃣ Open the File

Open this file in your code editor:
```
src/app/App.tsx
```

---

### 3️⃣ Find This Code (around line 26)

Look for these lines near the top of the file:

```typescript
// ========================================
// 🌤️ GET YOUR FREE API KEY (5 minutes):
// 1. Visit: https://openweathermap.org/api
// 2. Click "Sign Up" (100% FREE - no credit card)
// 3. Verify email and copy your API key
// 4. Paste it below: const API_KEY = 'your-key-here';
//
// 📚 See QUICK_START.md or GET_FREE_API_KEY.md for help
// 📝 App works with demo data if no API key is set
// ========================================
const API_KEY = 'YOUR_API_KEY_HERE';
```

---

### 4️⃣ Replace ONLY the Text Inside the Quotes

**BEFORE:**
```typescript
const API_KEY = 'YOUR_API_KEY_HERE';
```

**AFTER:**
```typescript
const API_KEY = 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6';
```

⚠️ **Important:**
- Keep the quotes `'...'`
- Keep the semicolon `;`
- Only replace the text `YOUR_API_KEY_HERE`
- Don't add extra spaces

---

### 5️⃣ Save the File

Press **Ctrl+S** (Windows/Linux) or **Cmd+S** (Mac) to save.

---

### 6️⃣ Wait for Activation

New API keys need **10-15 minutes** to activate. After waiting:

1. Refresh your weather app
2. Search for a city (e.g., "London")
3. Look for the green **"🌐 Live Data"** badge at the top!

---

## ✅ Verification

### You know it's working when:

1. **Green Badge Shows**: "🌐 Live Data" (not "📝 Demo Data")
2. **Real City Names**: Search results show actual cities
3. **Current Dates**: Forecast shows today's date
4. **Changing Data**: Different cities show different weather

---

## ❌ Common Mistakes

### ❌ WRONG (extra quotes):
```typescript
const API_KEY = ''a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6'';
```

### ❌ WRONG (no quotes):
```typescript
const API_KEY = a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6;
```

### ❌ WRONG (extra spaces):
```typescript
const API_KEY = '  a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6  ';
```

### ✅ CORRECT:
```typescript
const API_KEY = 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6';
```

---

## 🆘 Still Not Working?

### If you see "📝 Demo Data" badge after 15 minutes:

1. **Check Console Errors**:
   - Press F12 in browser
   - Click "Console" tab
   - Look for red error messages

2. **Common Console Errors**:
   - `Invalid API key` → Your API key is wrong, copy it again
   - `401 Unauthorized` → API key not activated yet, wait longer
   - `Network Error` → Check internet connection

3. **Double-Check**:
   - Copied the entire API key (usually 32 characters)
   - No spaces before or after
   - Saved the file after editing

---

## 🎉 Success!

When you see the green **"🌐 Live Data"** badge, you're all set! 

Now you can:
- Search any city in the world
- Get real-time weather updates
- See accurate forecasts
- Use current location detection

**Enjoy your live weather app!** ☀️

---

**Need more help?** See [GET_FREE_API_KEY.md](GET_FREE_API_KEY.md) for detailed troubleshooting.
