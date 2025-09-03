import { View, Text } from 'react-native';
import { useSignUp } from '@clerk/clerk-expo';
import { useState } from 'react';

const VerifyEmail = ({ email, onBack }) => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <View>
      <Text>VerifyEmail</Text>
    </View>
  );
};

export default VerifyEmail;