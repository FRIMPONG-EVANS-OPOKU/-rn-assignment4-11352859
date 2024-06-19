import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jobizz</Text>
      <Text style={styles.subtitle}>Welcome Back 👋</Text>
      <Text style={styles.description}>Let's log in. Apply to jobs!</Text>

      <TextInput style={styles.input} placeholder="Name" />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>

      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>Or continue with</Text>
        <View style={styles.line} />
      </View>

      <View>
        <TouchableOpacity>
          <Image
            style={styles.imageOne}
            source={require("./assets/originalappleicon.jpg")}
          />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity>
          <Image
            style={styles.imageTwo}
            source={require("./assets/originalfaceicon.jpeg")}
          />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity>
          <Image
            style={styles.imageThree}
            source={require("./assets/originalfaceiconmain.jpg")}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.socialContainer}>
        <TouchableOpacity>
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            }}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            }}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            }}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Text style={styles.registerItems}>
            Haven't an account?
             <Text style={styles.registerLink}>Register</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 16
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0073b1",
    marginBottom: 8,
    top: 30, // 50 pixels from the top
    left: -132 // 30 pixels from the left
  },
  subtitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    top: 28, // 50 pixels from the top
    left: -80 // 30 pixels from the left
  },
  description: {
    fontSize: 16,
    color: "#A1A1A1",
    marginBottom: 24,
    top: 34, // 50 pixels from the top
    left: -75 // 30 pixels from the left
  },
  input: {
    width: "100%",
    padding: 8,
    borderColor: "#E0E0E0",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: "#F6F6F6",
    top: 50,
  },
  button: {
    width: "100%",
    padding: 15,
    backgroundColor: "#0073b1",
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
    top: 55,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    top: 70,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#E0E0E0"
  },
  orText: {
    marginHorizontal: 8,
    color: "#A1A1A1"
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    marginBottom: 32
  },
  socialIcon: {
    width: 40,
    height: 40
  },
  registerText: {
    color: "#A1A1A1",
    top: -5,
  },
  registerLink: {
    color: "#0073b1",
    fontWeight: "bold",
  },
  imageOne: {
    width: 33,
    height: 33,
    marginRight: 10,
    resizeMode: "contain",
    top: 80,
    left: -70
  },
  imageTwo: {
    width: 30,
    height: 30,
    marginRight: 10,
    resizeMode: "contain",
    top: 50,
    left: 10,
  },
  imageThree: {
    width: 30,
    height: 30,
    marginRight: 10,
    resizeMode: "contain",
    top: 18,
    left: 90,
  },
  registerItems: {
    top: -25,
    left: 8,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
