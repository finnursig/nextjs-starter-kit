export default ({ children }) => (
  <div className="segment">
    <div className="container">
      {children}
    </div>

    <style jsx>{`
      @import 'config';

      .segment {
        @include segment;
      }

      .container {
        @include container;
      }
    `}</style>
  </div>
);
