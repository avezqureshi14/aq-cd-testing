import{j as n}from"./iframe-B3oWuvX6.js";import{useMDXComponents as i}from"./index-BXyOMUVo.js";import{C as e,M as s}from"./blocks-BFenEb4v.js";import{P as d,S as l,a as c,b as a,T as h,c as u,L as x,d as S,e as j,M as m,f as y,I as B,g as p,R as g,h as f,B as b}from"./ss-button.stories-Bo3W-GGl.js";import"./preload-helper-Dp1pzeXC.js";function r(o){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(t.h1,{id:"ssbutton-documentation",children:"SSButton Documentation"}),`
`,n.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,n.jsx(t.p,{children:"SSButton is a versatile, customizable button component built on top of Ant Design's Button component. It provides a comprehensive set of styling options, hierarchy variants, and icon support to meet various UI requirements in modern web applications."}),`
`,n.jsx(t.h2,{id:"installation",children:"Installation"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-bash",children:`pnpm install sixthsense-ui-component-library
`})}),`
`,n.jsx(t.h2,{id:"import",children:"Import"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-jsx",children:`import { SSButton } from "sixthsense-ui-component-library/SSButton";
`})}),`
`,n.jsx(t.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-jsx",children:`function App() {
  return <SSButton onClick={() => console.log("Button clicked!")}>Click Me</SSButton>;
}
`})}),`
`,n.jsx(t.h2,{id:"props",children:"Props"}),`
`,n.jsxs(t.table,{children:[n.jsx(t.thead,{children:n.jsxs(t.tr,{children:[n.jsx(t.th,{children:"Prop"}),n.jsx(t.th,{children:"Type"}),n.jsx(t.th,{children:"Default"}),n.jsx(t.th,{children:"Description"})]})}),n.jsxs(t.tbody,{children:[n.jsxs(t.tr,{children:[n.jsx(t.td,{children:n.jsx(t.code,{children:"hierarchy"})}),n.jsx(t.td,{children:n.jsx(t.code,{children:"ButtonHierarchy"})}),n.jsx(t.td,{children:n.jsx(t.code,{children:"'primary'"})}),n.jsx(t.td,{children:"Visual hierarchy of the button"})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:n.jsx(t.code,{children:"size"})}),n.jsx(t.td,{children:n.jsx(t.code,{children:"'sm' | 'md'"})}),n.jsx(t.td,{children:n.jsx(t.code,{children:"'sm'"})}),n.jsx(t.td,{children:"Size of the button"})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:n.jsx(t.code,{children:"iconOnly"})}),n.jsx(t.td,{children:n.jsx(t.code,{children:"boolean"})}),n.jsx(t.td,{children:"``"}),n.jsx(t.td,{children:"Whether the button should only display an icon only"})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:n.jsx(t.code,{children:"leftIcon"})}),n.jsx(t.td,{children:n.jsx(t.code,{children:"ReactNode"})}),n.jsx(t.td,{children:"-"}),n.jsx(t.td,{children:"Icon element to display on the left side"})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:n.jsx(t.code,{children:"rightIcon"})}),n.jsx(t.td,{children:n.jsx(t.code,{children:"ReactNode"})}),n.jsx(t.td,{children:"-"}),n.jsx(t.td,{children:"Icon element to display on the right side"})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:n.jsx(t.code,{children:"children"})}),n.jsx(t.td,{children:n.jsx(t.code,{children:"ReactNode"})}),n.jsx(t.td,{children:"-"}),n.jsx(t.td,{children:"Button content"})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:n.jsx(t.code,{children:"isDisabled"})}),n.jsx(t.td,{children:n.jsx(t.code,{children:"boolean"})}),n.jsx(t.td,{children:n.jsx(t.code,{children:"false"})}),n.jsx(t.td,{children:"Whether the button is disabled"})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:n.jsx(t.code,{children:"handleClick"})}),n.jsx(t.td,{children:n.jsx(t.code,{children:"boolean"})}),n.jsx(t.td,{children:n.jsx(t.code,{children:"false"})}),n.jsx(t.td,{children:"For handling click events"})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:n.jsx(t.code,{children:"className"})}),n.jsx(t.td,{children:n.jsx(t.code,{children:"string"})}),n.jsx(t.td,{children:n.jsx(t.code,{children:"''"})}),n.jsx(t.td,{children:"Additional CSS class names"})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:n.jsx(t.code,{children:"isLoading"})}),n.jsx(t.td,{children:n.jsx(t.code,{children:"boolean"})}),n.jsx(t.td,{children:n.jsx(t.code,{children:"false"})}),n.jsx(t.td,{children:"Whether the button is loading"})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:n.jsx(t.code,{children:"className"})}),n.jsx(t.td,{children:n.jsx(t.code,{children:"string"})}),n.jsx(t.td,{children:n.jsx(t.code,{children:"''"})}),n.jsx(t.td,{children:"Additional CSS class names"})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:n.jsx(t.code,{children:"type"})}),n.jsx(t.td,{children:n.jsx(t.code,{children:"ButtonType"})}),n.jsx(t.td,{children:"-"}),n.jsx(t.td,{children:"Button type (from Ant Design)"})]})]})]}),`
`,n.jsx(t.p,{children:"Plus all other props from Ant Design's Button component."}),`
`,n.jsx(t.h2,{id:"hierarchy-variants",children:"Hierarchy Variants"}),`
`,n.jsx(t.p,{children:"SSButton offers 8 hierarchy variants to match different UI contexts:"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-jsx",children:`// Primary (Default)
<SSButton hierarchy="primary">Primary Button</SSButton>

// Secondary Color
<SSButton hierarchy="secondaryColor">Secondary Color</SSButton>

// Secondary Gray
<SSButton hierarchy="secondaryGray">Secondary Gray</SSButton>

// Secondary Gray 2
<SSButton hierarchy="secondaryGray2">Secondary Gray 2</SSButton>

// Tertiary Color
<SSButton hierarchy="tertiaryColor">Tertiary Color</SSButton>

// Tertiary Gray
<SSButton hierarchy="tertiaryGray">Tertiary Gray</SSButton>

// Link Color
<SSButton hierarchy="linkColor">Link Color</SSButton>

// Link Gray
<SSButton hierarchy="linkGray">Link Gray</SSButton>
`})}),`
`,n.jsx(t.h3,{id:"primary-button",children:"Primary Button"}),`
`,n.jsx(e,{of:d}),`
`,n.jsx(t.h3,{id:"secondarycolor-button",children:"SecondaryColor Button"}),`
`,n.jsx(e,{of:l}),`
`,n.jsx(t.h3,{id:"secondarygray-button",children:"SecondaryGray Button"}),`
`,n.jsx(e,{of:c}),`
`,n.jsx(t.h3,{id:"secondarygray2-button",children:"SecondaryGray2 Button"}),`
`,n.jsx(e,{of:a}),`
`,n.jsx(t.h3,{id:"tertiarycolor-button",children:"TertiaryColor Button"}),`
`,n.jsx(e,{of:h}),`
`,n.jsx(t.h3,{id:"tertiarygray-button",children:"TertiaryGray Button"}),`
`,n.jsx(e,{of:u}),`
`,n.jsx(t.h3,{id:"linkcolor-button",children:"LinkColor Button"}),`
`,n.jsx(e,{of:x}),`
`,n.jsx(t.h3,{id:"linkgray-button",children:"LinkGray Button"}),`
`,n.jsx(e,{of:S}),`
`,n.jsx(t.h2,{id:"size-variants",children:"Size Variants"}),`
`,n.jsx(t.p,{children:"SSButton supports two sizes:"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-jsx",children:`// Small (Default)
<SSButton size="sm">Small Button</SSButton>

// Medium
<SSButton size="md">Medium Button</SSButton>
`})}),`
`,n.jsx(t.h3,{id:"small-button",children:"Small Button"}),`
`,n.jsx(e,{of:j}),`
`,n.jsx(t.h3,{id:"middle-button",children:"Middle Button"}),`
`,n.jsx(e,{of:m}),`
`,n.jsx(t.h3,{id:"large-button",children:"Large Button"}),`
`,n.jsx(e,{of:y}),`
`,n.jsx(t.h2,{id:"icon-support",children:"Icon Support"}),`
`,n.jsx(t.p,{children:"SSButton provides flexible icon placement options:"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-jsx",children:`import { UserOutlined, ArrowRightOutlined } from '@ant-design/icons';

// Left Icon
<SSButton leftIcon={<UserOutlined />}>
  With Left Icon
</SSButton>

// Right Icon
<SSButton rightIcon={<ArrowRightOutlined />}>
  With Right Icon
</SSButton>

// Both Icons
<SSButton
  leftIcon={<UserOutlined />}
  rightIcon={<ArrowRightOutlined />}
>
  Both Icons
</SSButton>

// Icon Only
<SSButton
  iconOnly={true}
  leftIcon={<UserOutlined />}
  aria-label="User profile"
/>
`})}),`
`,n.jsx(t.h3,{id:"icon-only-button",children:"Icon Only Button"}),`
`,n.jsx(e,{of:B}),`
`,n.jsx(t.h3,{id:"left-icon-button",children:"Left Icon Button"}),`
`,n.jsx(e,{of:p}),`
`,n.jsx(t.h3,{id:"right-icon-button",children:"Right Icon Button"}),`
`,n.jsx(e,{of:g}),`
`,n.jsx(t.h3,{id:"both-icon-button",children:"Both Icon Button"}),`
`,n.jsx(e,{of:f}),`
`,n.jsx(t.h2,{id:"states",children:"States"}),`
`,n.jsx(t.h3,{id:"disabled-state",children:"Disabled State"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-jsx",children:`<SSButton disabled>Disabled Button</SSButton>
`})}),`
`,n.jsx(t.h3,{id:"interactive-states",children:"Interactive States"}),`
`,n.jsx(t.p,{children:"SSButton has built-in hover and focus states that are automatically applied."}),`
`,n.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(t.h3,{id:"basic-button-variants",children:"Basic Button Variants"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-jsx",children:`import { SSButton } from "sixthsense-ui-component-library/SSButton";

function ButtonVariants() {
  return (
    <div className="flex gap-4">
      <SSButton hierarchy="primary">Primary</SSButton>
      <SSButton hierarchy="secondaryColor">Secondary</SSButton>
      <SSButton hierarchy="tertiaryColor">Tertiary</SSButton>
      <SSButton hierarchy="linkColor">Link</SSButton>
    </div>
  );
}
`})}),`
`,n.jsx(t.h3,{id:"buttons-with-icons",children:"Buttons with Icons"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-jsx",children:`import { DownloadOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import { SSButton } from "sixthsense-ui-component-library/SSButton";

function IconButtons() {
  return (
    <div className="flex gap-4">
      <SSButton leftIcon={<DownloadOutlined />}>Download</SSButton>

      <SSButton rightIcon={<UserOutlined />}>Profile</SSButton>

      <SSButton leftIcon={<SearchOutlined />} hierarchy="secondaryColor">
        Search
      </SSButton>

      <SSButton iconOnly icon={<DownloadOutlined />} aria-label="Download" />
    </div>
  );
}
`})}),`
`,n.jsx(t.h3,{id:"size-comparison",children:"Size Comparison"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-jsx",children:`import { DownloadOutlined } from "@ant-design/icons";
import { SSButton } from "sixthsense-ui-component-library/SSButton";

function ButtonSizes() {
  return (
    <div className="flex items-center gap-4">
      <SSButton size="sm" leftIcon={<DownloadOutlined />}>
        Small Button
      </SSButton>

      <SSButton size="md" leftIcon={<DownloadOutlined />}>
        Medium Button
      </SSButton>
    </div>
  );
}
`})}),`
`,n.jsx(t.h3,{id:"form-submission-example",children:"Form Submission Example"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-jsx",children:`import { CloseOutlined, SaveOutlined } from "@ant-design/icons";
import { SSButton } from "sixthsense-ui-component-library/SSButton";

function FormActions() {
  return (
    <div className="flex justify-end gap-4 mt-6">
      <SSButton
        hierarchy="secondaryGray"
        iconOnly={true}
        leftIcon={<CloseOutlined />}
        onClick={() => console.log("Cancel clicked")}
      >
        Cancel
      </SSButton>

      <SSButton
        hierarchy="primary"
        iconOnly={true}
        leftIcon={<SaveOutlined />}
        onClick={() => console.log("Save clicked")}
      >
        Save Changes
      </SSButton>
    </div>
  );
}
`})}),`
`,n.jsx(t.h3,{id:"custom-styling-with-tailwind",children:"Custom Styling with Tailwind"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-jsx",children:`import { SSButton } from "sixthsense-ui-component-library/SSButton";

function CustomStyledButtons() {
  return (
    <div className="flex gap-4">
      <SSButton className="bg-purple-600 hover:bg-purple-700 text-white">Custom Purple</SSButton>

      <SSButton className="bg-transparent border border-green-500 text-green-500 hover:bg-green-50">
        Custom Green
      </SSButton>

      <SSButton className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white">
        Gradient Button
      </SSButton>
    </div>
  );
}
`})}),`
`,n.jsx(t.h3,{id:"loading-state",children:"Loading State"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-jsx",children:`import { LoadingOutlined } from "@ant-design/icons";
import { SSButton } from "sixthsense-ui-component-library/SSButton";
import { useState } from "react";

function LoadingButton() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <SSButton
      loading={loading}
      onClick={handleClick}
      leftIcon={loading ? <LoadingOutlined /> : null}
    >
      {loading ? "Processing..." : "Submit"}
    </SSButton>
  );
}
`})}),`
`,n.jsx(t.h3,{id:"button-group-example",children:"Button Group Example"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-jsx",children:`import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { SSButton } from "sixthsense-ui-component-library/SSButton";

function PaginationButtons() {
  return (
    <div className="flex gap-2">
      <SSButton
        hierarchy="secondaryGray"
        leftIcon={<LeftOutlined />}
        iconOnly={true}
        aria-label="Previous page"
      />

      <SSButton hierarchy="secondaryGray">1</SSButton>
      <SSButton hierarchy="primary">2</SSButton>
      <SSButton hierarchy="secondaryGray">3</SSButton>

      <SSButton
        hierarchy="secondaryGray"
        leftIcon={<RightOutlined />}
        iconOnly={true}
        aria-label="Next page"
      />
    </div>
  );
}
`})}),`
`,n.jsx(s,{of:b})]})}function k(o={}){const{wrapper:t}={...i(),...o.components};return t?n.jsx(t,{...o,children:n.jsx(r,{...o})}):r(o)}export{k as default};
