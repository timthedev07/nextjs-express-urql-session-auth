import { useMicrosoftOAuthMutation } from "../../generated/graphql";
import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import queryString from "query-string";
import { useEffect, useState } from "react";

const Google: NextPage = () => {
  const [state, setState] = useState<{}>();
  const [, microsoftOAuth] = useMicrosoftOAuthMutation();
  const { push } = useRouter();

  useEffect(() => {
    (async () => {
      const urlParams = queryString.parse(window.location.search);
      let code = urlParams.code as string;
      let success = false;

      console.log("Gotten code", code);

      if (!code) {
        // TODO: handle error here
      }

      const response = await microsoftOAuth({ code });
      console.log("Made it thru", response);

      if (!response.error || !response.error.message.length) {
        success = true;
      }
      setState(response.data?.microsoftOAuth || {});

      return success;
    })().then((result) => {
      if (result) {
        push("/");
      }
    });
  }, []);

  return (
    <>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </>
  );
};

export default Google;
