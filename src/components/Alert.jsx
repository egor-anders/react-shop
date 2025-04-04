import { useContext, useEffect } from 'react';
import ShopContext from '../context/ShopContext';

function Alert() {
  const { alertName: name = '', closeAlert } = useContext(ShopContext)

  useEffect(() => {
    const timer = setTimeout(closeAlert, 3000);

    return () => clearTimeout(timer);

    // eslint-disable-next-line
  }, [name]);

  return (
    <div id="toast-container">
      <div className="toast">{name} добавлен в корзину</div>
    </div>
  );
}

export default Alert;
