import React from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Content,
  Button,
  Form,
  Input,
  Item,
  Label,
  View,
  Text
} from "native-base";

export default class LoginScreen extends React.Component {
  render() {
    return (
      <Container>
        <Content contentContainerStyle={{ flex: 1 }}>
          <View style={styles.hero}>
            <Text style={styles.heroText}>Working Sheet</Text>
          </View>
          <Form style={styles.form}>
            <Item regular style={styles.formField}>
              <Input
                autoCorrect={false}
                style={styles.input}
                placeholder="E-mail"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
              />
            </Item>
            <Item regular style={styles.formField}>
              <Input
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                returnKeyType="next"
              />
            </Item>
            <Button full style={styles.submitButton}>
              <Text>Login</Text>
            </Button>
            <Button transparent full style={styles.formField}>
              <Text>Forgot your password?</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const formField = {
  borderRadius: 10,
  marginBottom: 20
};
const styles = StyleSheet.create({
  formField,
  submitButton: {
    ...formField,
    paddingTop: 30,
    paddingBottom: 30
  },
  input: {
    marginTop: 0
  },
  hero: {
    backgroundColor: "#61B2F1",
    height: 200,
    justifyContent: "center",
    alignItems: "center"
  },
  heroText: { fontSize: 30, color: "white" },
  form: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "center"
  }
});
