import * as React from 'react';
import { connect } from 'react-redux';
import type { AppState } from '../../../../../reducers';
import { getSiteEngageEStreaming } from '../../../../../selectors/site';
import * as siteActions from '../../../../../actions/siteActions';
import styles from './index.css';
type Props = {
    siteToggleEngageEStreaming: () => void;
    siteEngageEStreaming: boolean;
};

const mapStateToProps = (state: AppState) => ({
    siteEngageEStreaming: getSiteEngageEStreaming(state),
});

const mapDispatchToProps = {
    siteToggleEngageEStreaming: siteActions.siteToggleEngageEStreaming,
};

const EStreamingButton = (props: Props) => (
    <button
        className={
            props.siteEngageEStreaming ? styles.localeBtn : `${styles.localeBtn} ${styles.inactive}`
        }
        type="button"
        onClick={props.siteToggleEngageEStreaming}
        data-testid="engage-estreaming-button"
    >
        E
    </button>
);

export default connect(mapStateToProps, mapDispatchToProps)(EStreamingButton);
