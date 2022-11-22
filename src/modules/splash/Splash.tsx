import React, {useEffect} from "react";
import {NavigationFunctionComponent} from "react-native-navigation";
import { setAuthorizationRoot, setOnboardingRoot} from "~/navigation/roots";
import {LoadingComponent} from "~/common/components/LoadingComponent";
export const Splash: NavigationFunctionComponent = () => {


  useEffect(() => {
      setAuthorizationRoot();
  }, []);

  return <LoadingComponent size={"large"} />;
};
