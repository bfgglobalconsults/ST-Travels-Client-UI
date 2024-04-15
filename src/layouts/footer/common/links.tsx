import { UsefulLinks } from "@/constant/constant";
import Link from 'next/link';

const Links: React.FC = () => {
  return (
    <div className="col-xl-2 col-md-3 order-cls">
      <div className="footer-space">
        <div className="footer-title">
          <h5>{UsefulLinks}</h5>
        </div>
        <div className="footer-content">
          <div className="footer-links">
            <ul>
              <li>
                <Link href="/">home</Link>
              </li>
              <li>
                <Link href="/">our vehical</Link>
              </li>
              <li>
                <Link href="/">latest video</Link>
              </li>
              <li>
                <Link href="/">services</Link>
              </li>
              <li>
                <Link href="/">booking deal</Link>
              </li>
              <li>
                <Link href="/">emergency call</Link>
              </li>
         
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
