import React from "react";
import { BsFillChatRightTextFill } from "react-icons/bs";
import firebase from "firebase/compat/app";
import { auth } from "../firebase";

import avatar from "../assets/75647218.png";

const WidgetChat: React.FC = () => {
  const [visable, setVisableChat] = React.useState<boolean>(true);

  const [user, setUser] = React.useState<firebase.User | null>(null);

  console.log(user)

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });

    return unsubscribe;
  }, [user]);

  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const SignUp = async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error);
    }
  };

  const handleConfirm = () => {};

  return (
    <div className="fixed right-4 bottom-5">
      {visable ? (
        <div
          onClick={() => setVisableChat(!visable)}
          className="border-solid border-2 border-black bg-indigo-500 rounded-full h-[100px] w-[100px]  cursor-pointer animate-pulse"
        >
          <h1 className="decoration-sky-600 text-5xl h-full flex justify-center align-middle items-center">
            <BsFillChatRightTextFill />
          </h1>
        </div>
      ) : (
        <div className="h-[500px] w-96 flex flex-col justify-around relative rounded-lg shadow-2xl  bg-gradient-to-bl from-dark-blue to-white via-dark-blue">
          <div className="absolute w-full flex flex-col items-center bottom-[430px]">
            <img src={avatar} className="rounded-full w-1/3" />
          </div>
          <div
            onClick={() => setVisableChat(true)}
            className="self-end cursor-pointer absolute top-0 right-2 tex"
          >
            X
          </div>
          <div className="flex flex-col items-center gap-5">
            <div className="w-3/5 text-center text-2xl">
              {" "}
              Welcome to our support chat!
            </div>
            <div>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-1/7 rounded-xl text-black"
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-1/7 rounded-xl text-black"
              />
              <button onClick={SignUp}> {"=>"} </button>
            </div>
            <div className="w-3/5 text-center text-2xl">
              Please entire your email to get started
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WidgetChat;
