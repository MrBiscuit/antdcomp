// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ec2EGmqeZaBv6iqjTrAK9W
// Component: qfSkZIbsj2Nv

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { AntdRadioGroup } from "@plasmicpkgs/antd5/skinny/registerRadio"; // plasmic-import: PZQhrvIGy1/codeComponent
import { AntdRadio } from "@plasmicpkgs/antd5/skinny/registerRadio"; // plasmic-import: -CXVV9tXtP/codeComponent
import Comp from "../../Comp"; // plasmic-import: OliqYognCxZh/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_blank_website_mobile_first.module.css"; // plasmic-import: ec2EGmqeZaBv6iqjTrAK9W/projectcss
import sty from "./PlasmicHome.module.css"; // plasmic-import: qfSkZIbsj2Nv/css

createPlasmicElementProxy;

export type PlasmicHome__VariantMembers = {};
export type PlasmicHome__VariantsArgs = {};
type VariantPropType = keyof PlasmicHome__VariantsArgs;
export const PlasmicHome__VariantProps = new Array<VariantPropType>();

export type PlasmicHome__ArgsType = {};
type ArgPropType = keyof PlasmicHome__ArgsType;
export const PlasmicHome__ArgProps = new Array<ArgPropType>();

export type PlasmicHome__OverridesType = {
  root?: p.Flex<"div">;
  radioGroup?: p.Flex<typeof AntdRadioGroup>;
  comp?: p.Flex<typeof Comp>;
};

export interface DefaultHomeProps {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHome__RenderFunc(props: {
  variants: PlasmicHome__VariantsArgs;
  args: PlasmicHome__ArgsType;
  overrides: PlasmicHome__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "data",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => ({
          button: [
            {
              danger: {
                propType: "boolean",
                propValues: ["true", "false"],
                currentValue: "false"
              }
            },
            {
              disabled: {
                propType: "boolean",
                propValues: ["true", "false"],
                currentValue: "false"
              }
            },
            {
              ghost: {
                propType: "boolean",
                propValues: ["true", "false"],
                currentValue: "false"
              }
            },
            {
              loading: {
                propType: "boolean",
                propValues: ["true", "false"],
                currentValue: "false"
              }
            },
            {
              shape: {
                propType: "string",
                propValues: ["default", "circle", "round"],
                currentValue: "default"
              }
            },
            {
              size: {
                propType: "string",
                propValues: ["large", "middle", "small"],
                currentValue: "middle"
              }
            },
            {
              type: {
                propType: "string",
                propValues: ["primary", "dashed", "link", "text", "default"],
                currentValue: "default"
              }
            }
          ],
          avatar: [
            {
              shape: {
                propType: "string",
                propValues: ["circle", "square"],
                currentValue: "circle"
              }
            },
            {
              size: {
                propType: "string",
                propValues: ["large", "small", "default"],
                currentValue: "default"
              }
            },
            { src: { propType: "string", propValues: [], currentValue: "-" } },
            {
              letters: {
                propType: "string",
                propValues: ["A", "B", "C", "AB", "AC"],
                currentValue: "AB"
              }
            }
          ],
          checkbox: [
            {
              checked: {
                propType: "boolean",
                propValues: ["true", "false"],
                currentValue: "false"
              }
            },
            {
              disabled: {
                propType: "boolean",
                propValues: ["true", "false"],
                currentValue: "false"
              }
            },
            {
              indeterminate: {
                propType: "boolean",
                propValues: ["true", "false"],
                currentValue: "false"
              }
            }
          ],
          switch: [
            {
              autoFocus: {
                propType: "boolean",
                propValues: ["true", "false"],
                currentValue: "false"
              }
            },
            {
              checked: {
                propType: "boolean",
                propValues: ["true", "false"],
                currentValue: "false"
              }
            },
            {
              checkedChildren: {
                propType: "ReactNode",
                propValues: [],
                currentValue: "-"
              }
            },
            {
              className: {
                propType: "string",
                propValues: [],
                currentValue: "-"
              }
            },
            {
              defaultChecked: {
                propType: "boolean",
                propValues: ["true", "false"],
                currentValue: "false"
              }
            },
            {
              disabled: {
                propType: "boolean",
                propValues: ["true", "false"],
                currentValue: "false"
              }
            },
            {
              loading: {
                propType: "boolean",
                propValues: ["true", "false"],
                currentValue: "false"
              }
            },
            {
              size: {
                propType: "string",
                propValues: ["default", "small"],
                currentValue: "default"
              }
            }
          ]
        })
      },
      {
        path: "radioGroup.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "button" as const
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.root
          )}
        >
          <AntdRadioGroup
            data-plasmic-name={"radioGroup"}
            data-plasmic-override={overrides.radioGroup}
            className={classNames("__wab_instance", sty.radioGroup)}
            defaultValue={"button" as const}
            onChange={p.generateStateOnChangeProp($state, [
              "radioGroup",
              "value"
            ])}
            optionType={"button" as const}
            options={(() => {
              try {
                return Object.keys($state.data);
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return (() => {
                    const __composite = [
                      { value: null, label: null },
                      { value: null, label: null }
                    ];
                    __composite["0"]["value"] = "button";
                    __composite["0"]["label"] = "Button";
                    __composite["1"]["value"] = "avatar";
                    __composite["1"]["label"] = "Avatar";
                    return __composite;
                  })();
                }
                throw e;
              }
            })()}
            value={p.generateStateValueProp($state, ["radioGroup", "value"])}
          >
            <AntdRadio
              className={classNames("__wab_instance", sty.radio__lsp2B)}
              value={"op1" as const}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__oYky
                )}
              >
                {"Option 1"}
              </div>
            </AntdRadio>
            <AntdRadio
              className={classNames("__wab_instance", sty.radio__mAj8M)}
              value={"op2" as const}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__zltNe
                )}
              >
                {"Option 2"}
              </div>
            </AntdRadio>
          </AntdRadioGroup>
          {true ? (
            <Comp
              data-plasmic-name={"comp"}
              data-plasmic-override={overrides.comp}
              className={classNames("__wab_instance", sty.comp)}
              component={(() => {
                try {
                  return (() => {
                    if ($state.radioGroup.value === "switch") return "_switch";
                    else return $state.radioGroup.value;
                  })();
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return [];
                  }
                  throw e;
                }
              })()}
              data={(() => {
                try {
                  return $state.data[$state.radioGroup.value];
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return undefined;
                  }
                  throw e;
                }
              })()}
            />
          ) : null}
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "radioGroup", "comp"],
  radioGroup: ["radioGroup"],
  comp: ["comp"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  radioGroup: typeof AntdRadioGroup;
  comp: typeof Comp;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHome__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHome__VariantsArgs;
    args?: PlasmicHome__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHome__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHome__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHome__ArgProps,
          internalVariantPropNames: PlasmicHome__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHome__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHome";
  } else {
    func.displayName = `PlasmicHome.${nodeName}`;
  }
  return func;
}

export const PlasmicHome = Object.assign(
  // Top-level PlasmicHome renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    radioGroup: makeNodeComponent("radioGroup"),
    comp: makeNodeComponent("comp"),

    // Metadata about props expected for PlasmicHome
    internalVariantProps: PlasmicHome__VariantProps,
    internalArgProps: PlasmicHome__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHome;
/* prettier-ignore-end */
