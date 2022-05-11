type BookCoverProps = {
    cover: string,
    size?: string
}
export const BookCover = ({cover, size="150px"}: BookCoverProps) => {

  return (
    <div style={{ minHeight: "220px" }}>
      <img
        style={{ maxWidth: size, height: "100%" }}
        src={`/img${cover}`}
        alt=""
      />
    </div>
  );
};
