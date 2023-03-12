import AdminLayout from 'components/Organisms/layout/AdminLayout';
import NavAdmin from 'components/Organisms/NavAdmin';
import { navItems } from 'constant';
import { NextPage } from 'next';

interface Props {}

const Posts: NextPage<Props> = () => {
  return (
    <AdminLayout>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsam
        optio odio eius. Doloremque, accusamus impedit atque error repellendus
        numquam dolorem maiores sunt repellat? Unde, necessitatibus. Rerum ipsum
        magni officia? Fugit temporibus error minima rerum. Est quae molestiae
        dolorem? Delectus repellendus fuga, unde praesentium architecto est
        omnis? Minus, neque alia
      </div>
    </AdminLayout>
  );
};

export default Posts;
