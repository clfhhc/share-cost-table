import React, { FC, useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import test, { readDb } from '../../sql/test';
import { defaultState } from '../../redux/reducers/index';
import {
  updateDBUrl as updateDBUrlAction,
  udpateDBFile as updateDBFileAction,
} from '../../redux/actions/actions';
import { ConnectedProps } from '../../utils/redux/types';

const mapStateToProps = (state: typeof defaultState) => ({
  dbUrl: state.db.dbUrl,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateDBUrl: (url: string) => dispatch(updateDBUrlAction(url)),
  updateDBFile: (dbFile: string) => dispatch(updateDBFileAction(dbFile)),
});

type Props = ConnectedProps<typeof mapStateToProps, typeof mapDispatchToProps>;

const DbComponent: FC<Props> = ({ dbUrl, updateDBUrl, updateDBFile }) => {
  useEffect(() => {
    test().then(updateDBUrl);
  }, []);
  return (
    <div>
      {dbUrl && (
        <a href={dbUrl} download="db.sqlite">
          db_link
        </a>
      )}
      <input
        type="file"
        id="input-db-file"
        onChange={e => {
          if (e.target.files) {
            readDb(e.target.files[0]).then(updateDBFile);
          }
        }}
      />
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DbComponent);
