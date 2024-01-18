import Image from "next/image";

type NavigationTogglerProps = {
    isModalOpen: boolean,
    handleModalClose: any,
    handleModalOpen: any
};

export default function NavigationToggler({isModalOpen, handleModalClose, handleModalOpen}: NavigationTogglerProps) {
  return (
    <div>

      <button className="navbar-toggler">
        {isModalOpen && (
          <Image
            src="/button2.png"
            alt="Navigator closer"
            onClick={handleModalClose}
            width={24}
            height={24}
          />
        )}
        
        {!isModalOpen && (
          <Image
            src="/button.png"
            alt="Navigator toggler"
            onClick={handleModalOpen}
            width={34}
            height={18}
          />
        )}
      </button>
    </div>
  );
}
