import { FormEvent } from "react";
import { useSearchParams } from "react-router-dom";

import Main from "@/components/UserComponents/Main/Main";

const UserIndexPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSearchParams] = useSearchParams();

  const handleChangeInput = (event: FormEvent<HTMLInputElement>) => {
    const device = event.currentTarget.value;
    setSearchParams({ device });
    event.currentTarget.checked = false;
  };

  return <Main onChangeInput={handleChangeInput} />;
};

export default UserIndexPage;
