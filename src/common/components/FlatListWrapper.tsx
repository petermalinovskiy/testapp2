import React from "react";
import {Constructor, FlatList, FlatListProps} from "react-native";
import {IWrapperProps, Wrapper} from "./Wrapper";

export function FlatListWrapper<T>({isLoading, tryAgain, error, errorText, ...props}: IWrapperProps & FlatListProps<T>) {
  const Component: Constructor<React.Component<FlatListProps<T>>> = FlatList;

  return (
    <Wrapper
      isLoading={isLoading}
      tryAgain={tryAgain}
      error={error}
      errorText={errorText}
      Component={Component}
      props={props}
    />
  );
}
