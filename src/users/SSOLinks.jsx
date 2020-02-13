import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Table from '@edx/paragon/dist/Table';
import Collapsible from '@edx/paragon/dist/Collapsible';

export default function SSOLinks({ data }) {
  const tableData = useMemo(() => {
    if (data === null || data.length === 0) {
      return [];
    }

    return data.map(result => ({
      name: result.name
    }));
  }, [data]);

  const columns = [
    {
      label: 'SSO Provider', key: 'name',
    },
    {
      label: 'Connected', key: 'connected',
    },
  ];

  const numConnected = tableData.length;

  return (
    <section className="mb-3">
      <h3>SSO Links</h3>
      <Collapsible title={`SSO Links (${numConnected} connected)`}>
        <Table
          data={tableData}
          columns={columns}
        />
      </Collapsible>
    </section>
  );
}

SSOLinks.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

SSOLinks.defaultProps = {
  data: [],
};
