import NavigationToggler from "./NavigationToggler";

type NavbarProps = {
    isModalOpen: boolean,
    handleModalClose: any,
    handleModalOpen: any
};

export default function Navbar({isModalOpen, handleModalClose, handleModalOpen}: NavbarProps) {
  return (
    <nav>
      <div className="container navbar-container">
        <a className="logo" href="#">
          dresnite.
        </a>

        <NavigationToggler isModalOpen={isModalOpen} handleModalOpen={handleModalOpen} handleModalClose={handleModalClose} />
      </div>
    </nav>
  );
}
