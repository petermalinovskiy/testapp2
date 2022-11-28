import {NavigationFunctionComponent} from "react-native-navigation";
import React from "react";
import { useGetCafeListQuery} from "~/api/cafe";
import {FlatListWrapper} from "~/common/components/FlatListWrapper";
import {NoList} from "~/common/components/NoList";
import {CafeItem} from "~/common/components/CafeItem";
import {useAppSelector} from "~/core/store/store";

export const Main: NavigationFunctionComponent = (): JSX.Element => {
    const accessToken = useAppSelector((store) => store.login.accessToken);
    const {data} = useGetCafeListQuery(accessToken);

  return (
      <FlatListWrapper
          data={data}
          renderItem={({item}) => <CafeItem cafeData={item}/>}
          keyExtractor={item => item.id}
          ListEmptyComponent={<NoList />}
      />
  );
};
