import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import Main from "../../components/UserComponents/Main/Main";

const UserIndexPage = () => {
  const navigator = useNavigate();

  const handleChangeInput = (event: FormEvent<HTMLInputElement>) => {
    const device = event.currentTarget.value;
    navigator(`?device=${device}`);
    event.currentTarget.checked = false;
  };

  return <Main onChangeInput={handleChangeInput} />;
};

export default UserIndexPage;
