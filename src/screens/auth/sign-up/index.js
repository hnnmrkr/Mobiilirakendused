import React, { useState } from "react";
import { View } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button";
import Separator from "../../../components/Separator";
import { styles } from "./styles";
import GoogleLogin from "../../../components/GoogleLogin";

const Signup = () => {
    const [checked, setChecked] = useState(false)

    return (
        <View style={styles.container}>
            <AuthHeader title="Sign Up"></AuthHeader>
            <Input label="Name" placeholder="John Doe" />
            <Input label="Email" placeholder="example@gmail.com" />
            <Input isPassword label="Password" placeholder="*******" />
            <View style={styles.agreeRow}>
                <Checkbox checked={checked} onCheck={setChecked}/>
                <Text style={styles.agreeText}>I Agree with <Text style={styles.agreeTextBold}>Terms & Privacy</Text></Text>
            </View>
            <Button style={styles.button} title="Sign Up" />
            <Separator text="Or Sign in" />
            <GoogleLogin/>
            <Text style={styles.footerText}>Already have an account?
                <Text style={styles.footerLink}>Sign In</Text>
            </Text>
        </View>
    )
}

export default React.memo(Signup)