import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Multiuser cross-platform environments',
    Svg: require('@site/static/img/cross_platform.svg').default,
    description: (
      <>
        Share software environments with your team across campus or across the
        globe. Deploy on any Linux distribution on your local network, in
        the cloud or even on your laptop.
      </>
    ),
  },
  {
    title: 'Extensive support for Python & R',
    Svg: require('@site/static/img/client_libraries.svg').default,
    description: (
      <>
        Builtin support for thousands of packages in Python & R with the option
          to add virtually any software written in any language, even with
          custom toolchains.
      </>
    ),
  },
  {
    title: 'Intuitive Graphical Interface',
    Svg: require('@site/static/img/dashboard.svg').default,
    description: (
      <>
        Easy to use graphical interface for managing your environments. Add,
        remove or update packages from an environment and monitor the progress
        in real-time as your environment is built.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
