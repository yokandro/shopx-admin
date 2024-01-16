import { capitalize } from "lodash";
import { type FC, useContext, type CSSProperties, useMemo } from "react";
import { Badge, Button, Dropdown, Select, Typography, theme } from "antd";
import { FilterFilled } from "@ant-design/icons";

import { FilterContext } from "src/common/contexts/FilterContext/FilterContext";
import {
  ProductStatuses,
  useGetCategoriesQuery,
} from "src/gql/generated.graphql";

import type { ProductsFilterProps } from "./types";

const ProductsFilter: FC<ProductsFilterProps> = ({ className }) => {
  const { setFilter, filter } = useContext(FilterContext);
  const { token } = theme.useToken();

  const { data, loading } = useGetCategoriesQuery();

  const contentStyle: CSSProperties = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  };

  const handleFiltersChange = (field: string) => (values: string[]) => {
    setFilter((prev) => ({ ...prev, [field]: values }));
  };

  const statusesOptions = Object.values(ProductStatuses).map((status) => ({
    value: status,
    label: capitalize(status),
  }));

  const categoriesOptions = useMemo(() => {
    const categories = data?.getCategories.collection || [];

    return categories.map((category) => ({
      value: category._id,
      label: category.name,
    }));
  }, [data]);

  const itemsCount = useMemo(
    () =>
      Object.values(filter).reduce((memo, item = []) => memo + item.length, 0),
    [filter]
  );

  return (
    <div className={className}>
      <Dropdown
        dropdownRender={() => (
          <div style={contentStyle} className="p-4">
            <div className="flex justify-between items-center mb-2">
              <Typography.Text className="font-semibold text-base">
                Filter by
              </Typography.Text>
              {itemsCount > 0 && (
                <Button
                  onClick={() => setFilter({})}
                  type="text"
                  danger
                  className="p-0"
                >
                  Reset
                </Button>
              )}
            </div>
            <div className="flex flex-col w-[200px]">
              <Select
                mode="multiple"
                options={statusesOptions}
                className="mb-2"
                placeholder="Select statuses"
                onChange={handleFiltersChange("statuses")}
              />
              <Select
                mode="multiple"
                options={categoriesOptions}
                loading={loading}
                placeholder="Select categories"
                onChange={handleFiltersChange("categoryIds")}
              />
            </div>
          </div>
        )}
      >
        <Badge count={itemsCount}>
          <Button icon={<FilterFilled className="text-blue-500 mt-1" />} />
        </Badge>
      </Dropdown>
    </div>
  );
};

export default ProductsFilter;
