import {useRef, useEffect} from 'react';
import { useSubscription } from "@apollo/client";
import {
  MessageItem,
  GET_MESSAGES_SUBSCRIPTION
} from 'chat-commons'

const ListMessage = ({ user }) => {
  const divRref = useRef(null);

  const { data, loading } = useSubscription(GET_MESSAGES_SUBSCRIPTION);

  const List = () => {
    if (!loading && data.messages.length) {
      return data.messages.map((item, idx) => (<MessageItem key={idx} user={user} data={item} />))
    }

    return  <h3 className="text-gray-600 text-center">Tulis Pesan</h3>
  };

  const scrollToBottom = () => {
    divRref.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [data]);

  return (
    <div className="overflow-auto">
      {loading ?
        <div className='flex flex-col h-screen justify-center items-center'>
          Loading...
        </div> :
        <div className='flex flex-col'><List /></div>
      }

      <div ref={divRref} />
    </div>
  );
}

export default ListMessage;