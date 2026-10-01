import {
  MAT_SELECT_CONFIG,
  MAT_SELECT_SCROLL_STRATEGY,
  MAT_SELECT_SCROLL_STRATEGY_PROVIDER,
  MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY,
  MAT_SELECT_TRIGGER,
  MatSelect,
  MatSelectChange,
  MatSelectModule,
  MatSelectTrigger
} from "./chunk-OQX3ZN6M.js";
import "./chunk-RK7VOOCO.js";
import "./chunk-CJ6NXO5G.js";
import "./chunk-FGER6QC5.js";
import {
  MatOptgroup,
  MatOption
} from "./chunk-6ZP5UMNO.js";
import "./chunk-IDMIF77D.js";
import {
  MatError,
  MatFormField,
  MatHint,
  MatLabel,
  MatPrefix,
  MatSuffix
} from "./chunk-XHECFOV2.js";
import "./chunk-37VY3FEN.js";
import "./chunk-76QIUDHL.js";
import "./chunk-AC3UMBR3.js";
import "./chunk-SXLWHITX.js";
import "./chunk-5UT373OG.js";
import "./chunk-VENV3F3G.js";
import "./chunk-GWFLKVBH.js";
import "./chunk-I2STEG2H.js";
import "./chunk-YKVGH7HO.js";
import "./chunk-XBD5P34E.js";
import "./chunk-PILWQXJT.js";
import "./chunk-JSOTBCUH.js";
import "./chunk-5J6QF4DK.js";
import "./chunk-5EG33CFQ.js";
import "./chunk-LZZFAKBE.js";
import "./chunk-2RKWCE3C.js";
import "./chunk-X3NTRSPF.js";
import "./chunk-3VFPA4VA.js";
import "./chunk-VPN3TBZZ.js";
import "./chunk-V2I7RDHX.js";
import "./chunk-4EJS4UQQ.js";
import "./chunk-2PQXQDEW.js";
import "./chunk-RSS3ODKE.js";
import "./chunk-GOMI4DH3.js";

// node_modules/@angular/material/fesm2022/select.mjs
var matSelectAnimations = {
  // Represents
  // trigger('transformPanel', [
  //   state(
  //     'void',
  //     style({
  //       opacity: 0,
  //       transform: 'scale(1, 0.8)',
  //     }),
  //   ),
  //   transition(
  //     'void => showing',
  //     animate(
  //       '120ms cubic-bezier(0, 0, 0.2, 1)',
  //       style({
  //         opacity: 1,
  //         transform: 'scale(1, 1)',
  //       }),
  //     ),
  //   ),
  //   transition('* => void', animate('100ms linear', style({opacity: 0}))),
  // ])
  /** This animation transforms the select's overlay panel on and off the page. */
  transformPanel: {
    type: 7,
    name: "transformPanel",
    definitions: [
      {
        type: 0,
        name: "void",
        styles: {
          type: 6,
          styles: { opacity: 0, transform: "scale(1, 0.8)" },
          offset: null
        }
      },
      {
        type: 1,
        expr: "void => showing",
        animation: {
          type: 4,
          styles: {
            type: 6,
            styles: { opacity: 1, transform: "scale(1, 1)" },
            offset: null
          },
          timings: "120ms cubic-bezier(0, 0, 0.2, 1)"
        },
        options: null
      },
      {
        type: 1,
        expr: "* => void",
        animation: {
          type: 4,
          styles: { type: 6, styles: { opacity: 0 }, offset: null },
          timings: "100ms linear"
        },
        options: null
      }
    ],
    options: {}
  }
};
export {
  MAT_SELECT_CONFIG,
  MAT_SELECT_SCROLL_STRATEGY,
  MAT_SELECT_SCROLL_STRATEGY_PROVIDER,
  MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY,
  MAT_SELECT_TRIGGER,
  MatError,
  MatFormField,
  MatHint,
  MatLabel,
  MatOptgroup,
  MatOption,
  MatPrefix,
  MatSelect,
  MatSelectChange,
  MatSelectModule,
  MatSelectTrigger,
  MatSuffix,
  matSelectAnimations
};
//# sourceMappingURL=@angular_material_select.js.map
