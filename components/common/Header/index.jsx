import Header from './Header'
import TopBar from './TopBar'

export default function MainNav({ setOpen }) {
  return (
    <header>
      {/* <TopBar /> */}
      <Header setOpen={setOpen} />
    </header>
  );
}
