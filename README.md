# :closed_lock_with_key: rn-firebase-auth :fire: :fire: :fire:

>_FYI_
>
> You must use your phone number if you are using Twilio trial membership.
> You can only have **one** authorized user at a time so you will need to
> delete your number from the Authorization tab every time you want to test
> the application.

## Usage

> **NOTE:** _Replace **rn-otp** everywhere in the code with **YOUR PROJECT NAME** from firebase. This holds true for both repositories._

```bash
# back-end repository
git clone https://github.com/rockchalkwushock/rn-one-time-password.git
cd rn-one-time-password
yarn install
cd functions
touch sensitive.js service_accounts.json
# Place Twilio API data in sensitive.js
# copy & paste JSON that is generated from 'Generate New Private Key'
# found at: https://console.firebase.google.com/project/rn-otp/settings/serviceaccounts/adminsdk
cd ..
firebase deploy --project <name> # must run from root of project directory

# front-end repository
git clone https://github.com/rockchalkwushock/rn-firebase-auth.git
cd rn-firebase-auth
yarn install
touch sensitive.js
# Place your config object in here.
# found at: https://console.firebase.google.com/project/rn-otp/overview
# Replace the baseUrl in /utils/index.js with YOUR_BASE_URL!!!
# Launch Expo & give her a go!
```

## :fire: ES7 Syntax :fire:

* Class

```javascript
class MyES7Class extends {
  // No need for defining the constructor()
  state = { someState: 123 }
}
```

* Methods on Class

```javascript
// Arrow function bind the context of 'this'
// lexically. This is okay since it will be called
// within the class as this._myFunction so there is
// no need to bind(this) on _myFunction later on in
// the class.
_myFunction = () => {
  // some code here.
}
```

* Async/Await

```javascript
// before
_myFunction() {
  axios.post('someEndpoint', { data: 'to send' })
    .then(() => { 'do something' })
    .catch(e => { `do something with the error ${e}`});
}

// async/await like a boss!
_myFunction = async () => {
  try {
    await axios.post('someEndpoint', { data: 'to send' });
  } catch (e) {
    console.log(e);
  }
}
```
