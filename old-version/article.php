<?php
$data = json_decode(file_get_contents('php://input'), true);
if (isset($data["page"])) {
    $page = $data["page"];

    include_once ("./connect.php");

    $stmt = $connect->prepare("SELECT id FROM groups WHERE category = ?");
    $stmt->bind_param("s", $page);
    $stmt->execute();
    $category_id_result = $stmt->get_result();

    if ($category_id_result === false) {
        echo json_encode(["error" => "Database error: " . $connect->error]);
        exit();
    }

    $category_id_row = $category_id_result->fetch_assoc();
    if (!$category_id_row) {
        echo json_encode(["error" => "No category found."]);
        exit();
    }

    $category_id = $category_id_row['id'];

    $stmt = $connect->prepare("SELECT title, text FROM article WHERE category_id = ?");
    $stmt->bind_param("i", $category_id);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result === false) {
        echo json_encode(["error" => "Database error: " . mysqli_error($connect)]);
        exit();
    }

    if (mysqli_num_rows($result) > 0) {
        $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);
        $end = json_encode($rows);
        echo $end;
    } else {
        echo json_encode(["error" => "No articles found."]);
    }
    $stmt->close();
    mysqli_close($connect);
}
?>