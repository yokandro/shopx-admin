import { Dropdown, Select, Tag, message, theme } from "antd";
import { useState, type CSSProperties, type FC } from "react";
import { capitalize } from "lodash";

import {
  GetProductsDocument,
  ProductStatuses,
  useChangeProductStatusMutation,
} from "src/gql/generated.graphql";

import { ProductStatusColors } from "./constants";
import type { ProductStatusColumnType } from "./types";

const ProductStatusColumn: FC<ProductStatusColumnType> = ({
  status,
  productId,
}) => {
  const [open, setOpen] = useState(false);
  const { token } = theme.useToken();

  const [changeStatus] = useChangeProductStatusMutation({
    onCompleted: () => message.success("Product status has been changed"),
    onError: (error) => message.error(error.message),
    refetchQueries: [GetProductsDocument],
  });

  const containerStyle: CSSProperties = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  };

  const onSelectChange = (value: string) =>
    changeStatus({ variables: { input: { status: value, productId } } });

  return (
    <Dropdown
      trigger={["click"]}
      open={open}
      onOpenChange={setOpen}
      dropdownRender={() => (
        <div style={containerStyle} className="p-4">
          <Select
            className="min-w-[200px]"
            placeholder="Select status"
            defaultValue={status}
            onChange={onSelectChange}
            onSelect={() => setOpen(false)}
            options={Object.values(ProductStatuses).map((item) => ({
              value: item,
              label: capitalize(item),
            }))}
          />
        </div>
      )}
    >
      <Tag color={ProductStatusColors[status]}>{capitalize(status)}</Tag>
    </Dropdown>
  );
};

export default ProductStatusColumn;
