export const NovedadesPage = () => {
  return (
    <div className="w-full flex flex-col flex-1">
      <section className="w-full flex my-10 px-28 flex-col gap-8 items-center flex-1">
        <div style={{ width: '100%', height: '1000px', overflow: 'hidden' }}>
          <iframe
            src="https://widgets.sociablekit.com/linkedin-page-posts/iframe/25616537"
            style={{
              width: 'calc(100% + 20px)',
              height: '1000px',
              marginRight: '-20px',
              border: '0',
              display: 'block',
            }}
          />
        </div>
      </section>
    </div>
  );
};
