import { message } from "antd";
import { useContext, useEffect, useMemo } from "react";

import { ViewerContext } from "src/common/contexts/ViewerContext/ViewerContext";
import { Account, useGetCurrentAccountQuery } from "src/gql/generated.graphql";
import { useAuth } from "src/common/hooks/useAuth/useAuth";

export const useInitViewer = () => {
  const { logout } = useAuth();
  const { setUser } = useContext(ViewerContext);

  const { data, loading } = useGetCurrentAccountQuery({
    onError: (error) => {
      if (error.message === "Unauthorized") {
        message.error("Your session has expired. Please login again.");
        setUser(null);
        return logout();
      }
      message.error(error.message);
    },
  });

  const user = useMemo(() => data?.getCurrentAccount as Account, [data]);

  useEffect(() => {
    if (user) setUser(user);
  }, [user, setUser]);

  return { isViewerLoading: loading };
};
