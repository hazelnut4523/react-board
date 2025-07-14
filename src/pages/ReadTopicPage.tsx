import ProfileCardLarge from "@/components/ProfileCardLarge";

export default function ReadTopicPage() {
  return (
    <div className="flex flex-col">
      <TopicHeader />

      <div className="flex flex-row gap-4">
        <div className="flex-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in arcu
          egestas, blandit augue eget, feugiat tellus. Morbi porta finibus diam.
          Aenean lacinia in augue in efficitur. Phasellus euismod nisl non
          sollicitudin facilisis. In vitae arcu nec odio iaculis rhoncus sed sed
          urna. Nulla mattis tellus est, eu condimentum nunc volutpat id. Aenean
          elementum sapien nec metus imperdiet fermentum. Phasellus elementum
          orci risus, vitae pulvinar ipsum aliquet ut. Vivamus eu varius felis,
          non faucibus sem. Cras massa orci, mattis at sapien eget, scelerisque
          faucibus lectus. Ut ac ex facilisis leo fringilla molestie. Morbi non
          massa nulla. Proin vestibulum quis nisl sit amet viverra. Curabitur
          vulputate risus et elit rutrum fringilla. Curabitur dictum nunc
          mauris, id suscipit neque consectetur non. Vivamus elementum sit amet
          orci viverra placerat. Praesent fringilla tortor turpis, eget
          ullamcorper orci vehicula nec. Suspendisse consequat lectus eget sem
          auctor, non tincidunt magna semper. Curabitur luctus velit urna, a
          dignissim dui aliquet id. Vivamus nibh dui, vestibulum eu ornare non,
          tincidunt in dolor. Nunc orci velit, finibus ultrices urna eu,
          venenatis porttitor leo. Vivamus dolor orci, egestas eget ultrices at,
          ultrices at ligula. Cras sit amet elit blandit, suscipit libero vitae,
          malesuada turpis. Proin vel ultricies elit, ac aliquet mauris. Vivamus
          euismod dignissim mauris, quis sollicitudin purus euismod vitae.
          Aliquam magna sem, fermentum ut euismod vitae, tincidunt id velit.
          Cras nec varius lacus. Quisque eu varius risus, in euismod nulla.
          Integer leo enim, dictum ut sem et, accumsan egestas turpis. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et velit
          vitae metus efficitur pellentesque. Donec sollicitudin, mauris eget
          varius tristique, lorem neque cursus massa, sagittis cursus nibh
          ligula at magna. Nullam ac lectus mauris. Ut ornare dignissim turpis
          eget mattis. Vivamus at feugiat urna. Phasellus id ultrices turpis.
          Maecenas fringilla neque at tellus laoreet gravida. Nunc enim neque,
          condimentum eget iaculis quis, faucibus nec massa. Duis facilisis nisl
          vitae nisl rhoncus tincidunt. In id leo ut nunc egestas semper
          facilisis a lectus. Vivamus iaculis ligula nibh, id semper turpis
          semper ut. Suspendisse quam mi, aliquam a mi eget, efficitur tempus
          turpis. Vivamus pretium dapibus erat quis hendrerit. In hac habitasse
          platea dictumst. Morbi ornare ac felis et convallis. Pellentesque
          sodales lacus ac porttitor viverra. Ut tincidunt lacus ac mauris
          congue dignissim. Nam eleifend venenatis elit nec tristique. Interdum
          et malesuada fames ac ante ipsum primis in faucibus. Ut tempus
          scelerisque blandit. Nam viverra luctus diam, vestibulum fermentum mi
          finibus a. Proin tincidunt enim non ultrices egestas. Nulla vitae
          justo sit amet leo convallis tristique sit amet non libero. Vivamus
          sed libero at erat condimentum vulputate eget non risus. Phasellus eu
          mattis magna, at finibus est. Aenean nec ultrices ex. Fusce fringilla
          et neque eu facilisis. Duis semper maximus pellentesque. Mauris sed
          tortor metus. Suspendisse iaculis metus interdum sagittis bibendum.
          Nulla facilisi. Nulla ac tempor ipsum, ut vehicula enim. Vestibulum
          tempor quis magna ut venenatis. Morbi tristique mattis tellus, sit
          amet ultrices quam elementum id. Proin imperdiet dui eget lectus
          dapibus, eget commodo dolor auctor.
        </div>

        <div className="w-1/4">
          <ProfileCardLarge />
        </div>
      </div>
    </div>
  );
}

function TopicHeader() {
  return (
    <header className="w-full ">
      <div className="flex flex-col items-center w-full bottom-[50%] py-24">
        <h1 className="text-3xl font-bold">
          Atomic Design vs FSD, 프런트엔드 구조 설계의 길
        </h1>

        <time>2025. 01. 01.</time>
      </div>
    </header>
  );
}
