import { message } from "antd";
import { useContext, useEffect, useMemo } from "react";

import { ViewerContext } from "src/common/contexts/ViewerContext/ViewerContext";
import { useAuth } from "src/common/hooks/useAuth/useAuth";
import { User, useGetCurrentUserQuery } from "src/gql/generated.graphql";

export const useInitViewer = () => {
  const { logout } = useAuth();
  const { setUser } = useContext(ViewerContext);

  const { data, loading } = useGetCurrentUserQuery({
    onError: (error) => {
      if (error.message === "Unauthorized") {
        message.error("Your session has expired. Please login again.");
        setUser(null);
        return logout();
      }
      message.error(error.message);
    },
  });

  const user = useMemo(() => data?.getCurrentUser as User, [data]);

  useEffect(() => {
    if (user) setUser(user);
  }, [user, setUser]);

  return { isViewerLoading: loading };
};
