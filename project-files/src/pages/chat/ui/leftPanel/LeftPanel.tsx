// Components
import { BtnMenu } from "@/components/btnMenu";
import { Search } from "@/components/search";

import { Menu } from "@/components/menu";

// Styles
import "./LeftPanel.css";

export function LeftPanel() {
  return (
    <div className="left-panel">

      <div className="settings-search">
        <BtnMenu
          widthIcon={30}
          heightIcon={30}
          children={<Menu />} />

        <Search />
      </div>

      <div className="groups">

      </div>

    </div>
  );
};