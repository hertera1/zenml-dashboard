import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { AppRoute } from '../../../routes';
import { Box, FlexBox, IfElse, PrimaryButton } from '../../components';
import { AuthenticatedLayout } from '../common/layouts/AuthenticatedLayout';
import { SidebarContainer } from '../common/layouts/SidebarContainer';
import { Tabs } from '../common/Tabs';
import Header from './Header';
import Stacks from './Stacks';
import Component from './Component';
import { routePaths } from '../../../routes/routePaths';
import { useSelector } from '../../hooks';
import { workspaceSelectors } from '../../../redux/selectors';

export const BasePage: React.FC<{
  tabPages: TabPage[];
  fromRegisterComponent?: boolean;
  breadcrumbs: TBreadcrumb[];
  tabBasePath: string;
  renderHeaderRight?: () => JSX.Element;
  headerWithButtons?: boolean;
}> = ({
  fromRegisterComponent = false,
  tabPages,
  breadcrumbs,
  tabBasePath,
  renderHeaderRight,
  headerWithButtons,
  children,
}) => {
  // debugger;
  const history = useHistory();
  const selectedWorkspace = useSelector(workspaceSelectors.selectedWorkspace);
  return (
    <>
      <AuthenticatedLayout>
        <SidebarContainer>
          <IfElse
            condition={!!headerWithButtons}
            renderWhenTrue={() => (
              <Header.HeaderWithButtons
                breadcrumbs={[...breadcrumbs]}
                renderRight={renderHeaderRight}
              />
            )}
            renderWhenFalse={() => (
              <Header.DefaultHeader
                breadcrumbs={[...breadcrumbs]}
                renderRight={renderHeaderRight}
              />
            )}
          />
          <FlexBox.Row>
            <Component fromRegisterComponent={fromRegisterComponent} />
            <Box marginLeft="lg" style={{ width: '100%' }}>
              {children}
              {tabPages.length > 1 ? (
                <Tabs pages={tabPages} basePath={tabBasePath} />
              ) : (
                <>
                  <FlexBox marginTop="xxl" marginBottom="sm"></FlexBox>
                  <FlexBox marginBottom="xxl">
                    {/* <Switch> */}
                    <Redirect exact from={tabBasePath} to={tabPages[0].path} />

                    {tabPages.map((page, index) => (
                      <AppRoute
                        key={index}
                        path={page.path}
                        exact={true}
                        component={page.Component}
                      />
                    ))}
                    {/* </Switch> */}
                  </FlexBox>
                </>
              )}
            </Box>
          </FlexBox.Row>
        </SidebarContainer>
        {!fromRegisterComponent && (
          <FlexBox
            style={{
              position: 'fixed',
              right: '0',
              bottom: '0',
              marginRight: '45px',
            }}
          >
            <Box marginBottom="lg">
              <PrimaryButton
                onClick={() => {
                  history.push(
                    routePaths.stackComponents.registerComponents(
                      'all_components',
                      selectedWorkspace,
                    ),
                  );
                }}
              >
                Register Component
              </PrimaryButton>
            </Box>
          </FlexBox>
        )}
      </AuthenticatedLayout>
    </>
  );
};

export default Stacks;
